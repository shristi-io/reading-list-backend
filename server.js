const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bookRouter = require("./routes/bookRoutes");
const userRouter = require("./routes/userRoutes");
const connectDb = require("./config/dbConnection");
const { errorHandler } = require("./middleware/errorHandler");

connectDb();

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
// Middleware
app.use("/api/books/", bookRouter);
app.use("/api/users/", userRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
