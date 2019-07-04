const { model, Schema } = require("mongoose");

const postSchema = new Schema(
  {
    content: String,
    creatorId: String,
    picPath: String,
    picName: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Post", postSchema);
