

# JWT-based Authentication and Authorization System

This project implements a JWT-based authentication and authorization system using Node.js for the backend and React for the frontend. The system provides secure user authentication and protects routes by requiring a valid authentication token for accessing protected resources.


## Features

- User authentication and authorization(JWT)
- Token-based authorization for protected routes
- Finite expiry date for JWT tokens
-Protected routes except for the login route
-Automatic token renewal using refresh tokens
-Support for various login mechanisms (email-password)
-Backend server built with Node.js
-Frontend UI built with React
-Database integration 

## Tech Stack

- ReactJS
- MongoDB
- NodeJS
- ExpressJS



## Installation and Usage

To run the backend server on your local machine, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/AditiSharma00/Assignment.git
   ```

2. Install the dependencies:

   ```
   cd Backend
   npm install
   ```
3. Set up the environment variables:
  ```
  -MONGO_URL=mongodb+srv://aditisharma:aditisharma@cluster0.5wz99lk.mongodb.net/test?retryWrites=true&w=majority
-TOKEN_SECRET=asdflkjghSDFGH
-REFRESH_TOKEN_SECRET=oiuygtfrdeswdfghjnbh
  ```
4. Start the development server:
  ```
   npm run server
   ```

5. Install the frontend dependencies:
 ```
 cd frontend
 npm run server
 ```

 ## Usage
 -Open your web browser and navigate to the frontend application.
-Sign up or log in using your preferred login mechanism.
-Once logged in, you will have access to the protected routes.
-Make API requests to the backend, and the authentication token will be automatically included in the requests.
-If the token expires, the system will attempt to renew the token using the refresh token mechanism.
-If the refresh token fails or the user logs out, you will be directed to the login page.


## Contributing

Contributions to the project are welcome. If you find a bug or want to add a new feature, please create a new issue or pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
