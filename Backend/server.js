const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(cors());

const mongoose = require("mongoose");
//Connect to DB
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//Import Routes
const authRoute = require("./Routes/AuthRoutes");
const postRoute = require("./Routes/PostRoutes");
//Route MiddleWare
app.use(express.json());

app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(8000, () => console.log("Server is running"));
