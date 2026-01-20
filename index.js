 const express = require("express");
const userRouter = require("./routes/users.routes");
require("dotenv").config();

const app = express();

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});