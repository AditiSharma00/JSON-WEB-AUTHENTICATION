import { Box, Text, Flex, Image } from "@chakra-ui/react";
import "./Signup.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
    };
    fetch("http://localhost:8000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.msg === "Email already exists") {
          toast.warning(res.msg);
        } else if (
          res.msg === "Password should be string and of min 6 characters"
        ) {
          toast.info(res.msg);
        } else if (res.msg === "Something went wrong, Try Again") {
          toast.error(res.msg);
        } else if (res.msg === "Registration successful") {
          toast.success(res.msg);
          // navigate("/login");

          window.location.href = "/login";
          // Redirect to the login page
        }
      })
      .catch((err) => {
        toast.error("Signup Failed");
      });
  };

  return (
    <div>
      <Box className="text_sigup_box">
        <Text className="text_signup">Sign in for add posts</Text>
      </Box>
      <br />
      <br />
      <br />
      <Flex className="media">
        <Box className="box1">
          {/* For Input Tags */}
          <Box className="Input_boxes">
            <div className="iphone">
              <header className="header">
                {/* <Image className="icons_images" src={left} alt="left" /> */}
                <h1 style={{ fontWeight: "700", fontStyle: "italic" }}>
                  Sign up
                </h1>
              </header>
              <main className="main">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form__field">
                    <label
                      style={{ color: "#fff", fontWeight: "600" }}
                      className="form__label"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      value={name}
                      id="name"
                      className="form__input"
                      name="name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter the name"
                    />
                  </div>
                  <div className="form__field">
                    <label
                      style={{ color: "#fff", fontWeight: "600" }}
                      className="form__label"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      className="form__input"
                      name="email"
                      type="email"
                      placeholder="email@apple.com"
                    />
                  </div>
                  <div className="form__field">
                    <label
                      style={{ color: "#fff", fontWeight: "800" }}
                      className="form__label"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPass(e.target.value)}
                      id="password"
                      className="form__input"
                      name="password"
                      type="password"
                      placeholder="Pick a strong password"
                    />
                  </div>
                  <div className="form__field">
                    <button
                      className="button button--full button--primary"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
                <div className="text--center">
                  <p style={{ color: "#fff", fontWeight: "800" }}>
                    Already have an account? <a href="./login">Log in</a>
                  </p>
                </div>
              </main>
            </div>
          </Box>
        </Box>
        <Box className="box2">{/* Your image or video components */}</Box>
      </Flex>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Signup;
