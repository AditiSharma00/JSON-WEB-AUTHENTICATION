import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
const PostPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const accessToken = localStorage.getItem("token");
        const refreshToken = localStorage.getItem("refreshToken");

        // Check if access token is expired
        if (isTokenExpired(accessToken)) {
          // Check if refresh token exists
          if (refreshToken) {
            try {
              // Send refresh token to the backend for a new access token
              const response = await axios.post(
                "http://localhost:8000/api/user/refresh",
                { refreshToken }
              );

              const newAccessToken = response.data.accessToken;
              localStorage.setItem("accessToken", newAccessToken);
              fetchPosts();
            } catch (error) {
              console.log(error);

              // Redirect to login page
              window.location.href = "/login";
            }
          }
        } else {
          // Fetch posts with the current access token
          const response = await axios.get("http://localhost:8000/api/posts", {
            headers: {
              "auth-token": accessToken,
            },
          });

          setPosts(response.data);
        }
      } catch (error) {
        console.log(error);
        // Handle error while fetching posts
      }
    };

    fetchPosts();
  }, []);

  // Helper function to check if the token is expired
  const isTokenExpired = (token) => {
    if (!token) return true;

    const tokenData = JSON.parse(atob(token.split(".")[1]));
    const tokenExpiration = tokenData.exp * 1000; // Convert expiration time to milliseconds
    const currentTime = Date.now();

    return currentTime >= tokenExpiration;
  };

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <MDBCard>
          <MDBCardBody key={post._id}>
            <MDBCardTitle>{post.title}</MDBCardTitle>
            <MDBCardText>{post.body}</MDBCardText>
            <MDBBtn>Edit</MDBBtn>
            <br />
            <br />

            <MDBBtn>Delete</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
};

export default PostPage;
