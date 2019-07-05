const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express - Generated with IronGenerator" });
});

module.exports = router;

router.get("/picture/add", (req, res) => {
  res.render("upload");
});

router.post("/picture/add", cloudinary.single("photo"), async (req, res) => {
  const { content, creatorId } = req.body;
  const { url: picPath, originalname: picName } = req.file;
  await Post.create({
    content,
    creatorId,
    picPath,
    picName
  });
  res.redirect("/");
});
