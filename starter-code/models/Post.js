//const { model, Schema } = require("mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const commentSchema = Schema({
  content: String,
  commentId: Schema.ObjectId,
  imgPath: String,
  imgName: String
});

const postSchema = Schema(
  {
    content: String,
    creatorId: {
      type: Schema.ObjectId
    },
    picPath: String,
    picName: String,
    comments: [commentSchema]
  },
  {
    timestamps: true,
    versionKey: false
  }
);


//module.exports = model("Post", postSchema);
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
