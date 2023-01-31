const express = require("express");
const { blogController } = require("../Controllers/blog.controller");
const { upload } = require("../middleware/FileUploder");
const blogRouter = express.Router();

blogRouter.get("/getblogs", blogController.getBlog);
blogRouter.get("/getblogs/:id", blogController.getBlogById);
blogRouter.post(
  "/createblog",
  upload.single("picture"),
  blogController.createBlog
);
// blogRouter.patch("/updateblog/:id", blogController.UpdateBlog);

blogRouter.delete("/deleteblog/:id", blogController.createBlog);

module.exports = {
  blogRouter,
};
