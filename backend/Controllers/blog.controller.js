const { BlogModel } = require("../Model/blog.model");

const getBlog = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.send(blogs);
  } catch (err) {
    res.send({ error: err.message });
  }
};
// const UpdateBlog = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const blogs = await BlogModel.findOneAndUpdate({ _id: id });
// //     if (blogs) {
// //       res.send({ msg: "Blog Deleted!" });
// //     }
// //   } catch (err) {
// //     res.send({ error: err.message });
// //   }
// };
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blogs = await BlogModel.findOne({ _id: id });
    res.send(blogs);
  } catch (err) {
    res.send({ error: err.message });
  }
};
const createBlog = async (req, res) => {
  try {
    const { userId, title, content, picturePath } = req.body;
    const new_Blog = new BlogModel({
      userId,
      title,
      content,
      img: picturePath,
    });
    await new_Blog.save();
    res.send({ msg: "Blog created successfully!" });
  } catch (err) {
    res.send({ error: err.message });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blogs = await BlogModel.findOneAndDelete({ _id: id });
    if (blogs) {
      res.send({ msg: "Blog Deleted!" });
    }
  } catch (err) {
    res.send({ error: err.message });
  }
};

const blogController = {
  getBlog,
  getBlogById,
  createBlog,
  deleteBlog,
};

module.exports = {
  blogController,
};
