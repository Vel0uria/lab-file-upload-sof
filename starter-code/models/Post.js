//const { model, Schema } = require("mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = Schema(
  {
    content: String,
    creatorId: {
      type: Schema.Types.ObjectId
    },
    picPath: String,
    picName: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

//module.exports = model("Post", postSchema);
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
