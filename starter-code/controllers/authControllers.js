const User = require("../models/user");

exports.postSignup = async (req, res) => {
  const { username, password } = req.body;
  await User.register(new User({ username }), password);
  console.log(username, password);
};
