const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./config/db");
const { blogRouter } = require("./Routes/blog.route");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const bodyPerser=require("body-parser");


app.use(express.json());
app.use(cors());


app.get("/", (res, req) => {
  res.send("Home");
});
app.use("/", blogRouter);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`listing on port ${PORT}`);
  } catch (err) {
    console.log("error to connecting", err);
  }
});
