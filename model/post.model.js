const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  user_id: String,
  title: String,
  body: String,
  device: String,
});

const PostModel = mongoose.model("post", postSchema);

module.exports = {
  PostModel,
};


// {
//   "title":"Nasir 3",
//   "body":"3",
//   "device":"mobile"
// }