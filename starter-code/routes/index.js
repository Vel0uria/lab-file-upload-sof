const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const cloudinary = require("../config/cloudinary");
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express - Generated with IronGenerator" });
});

router.get("/picture/add", (req, res) => {
  res.render("upload");
});

router.post("/picture/add", cloudinary.single("photo"), async (req, res) => {
  const { content } = req.body;
  const { url: picPath, originalname: picName } = req.file;
  await Post.create({
    content,
    creatorId,
    picPath,
    picName
  });
  res.redirect("/");
});

module.exports = router;
