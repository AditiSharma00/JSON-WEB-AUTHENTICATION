import { Flex, Box, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    // Connection between BE and FE
    fetch("http://localhost:8000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.msg === "wrong credentials") {
          toast.warning(res.msg);
        } else if (res.msg === "Email doesn't exist") {
          toast.info(res.msg);
        } else if (res.msg === "Email or password is wrong!") {
          toast.error(res.msg);
        } else if (res.msg === "Login successful") {
          toast.success(res.msg);
          localStorage.setItem("token", res.accessToken);
          localStorage.setItem("refreshToken",res.refreshToken);
  
          // navigate("/login");

          window.location.href = "/post";
          // Redirect to the login page
        }
      })
      .catch((err) => {
        toast({
          position: "bottom",
          title: "Failed ",
          description: `Login Failed `,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
  };

  return (
    <div>
      <Box className="login_text_box">
        <Text className="text_loginup">Sign in for add posts</Text>
      </Box>
      <br />
      <br />
      <br />
      <Flex className="media">
        <Box className="box1">
          <Box className="input_box_size">
            <div className="iphone">
              <main class="main">
                <form class="form" action="#" onSubmit={handleLogin}>
                  <div class="form__field">
                    <label
                      style={{ color: "#fff", fontWeight: "800" }}
                      class="form__label"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      class="form__input"
                      name="email"
                      type="email"
                      placeholder="email@gmail.com"
                    />
                  </div>

                  <div class="form__field">
                    <label
                      style={{ color: "#fff", fontWeight: "800" }}
                      class="form__label"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPass(e.target.value)}
                      id="password"
                      class="form__input"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div class="form__field">
                    <button
                      class="button button--full button--primary"
                      type="submit"
                    >
                      Log in
                    </button>
                  </div>
                </form>

                <div class="text--center">
                  <p style={{ color: "#fff", fontWeight: "800" }}>
                    Don't have an account? <a href="./signup">Sign up</a>
                  </p>
                </div>
              </main>
            </div>
          </Box>
        </Box>
        <ToastContainer position="bottom-right" />
      </Flex>
    </div>
  );
};

export default Login
;
