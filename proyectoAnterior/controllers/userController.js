const User = require("../models/User");
const passport = require("passport");
const bcrypt = require("bcryptjs");
async function index(req, res) {}
const Tweet = require("../models/Tweet");

// Show the form for creating a new resource
async function showCreate(req, res) {
  return res.render("pages/register");
}

// Store a newly created resource in storage.
async function store(req, res) {
  newUser = req.body;
  const passwordHasheado = await bcrypt.hash(newUser.password, 10);
  const created = await User.create({
    firstname: newUser.firstname,
    lastname: newUser.lastname,
    email: newUser.email,
    username: newUser.username,
    image: newUser.image,
    password: passwordHasheado,
  });

  return res.redirect("/");
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

//User Profile Render
async function showUserTweets(req, res) {
  const logedUser = req.user;
  const user = await User.findOne({ _id: req.params.id }).populate("tweets", null, null, {
    sort: { createdAt: "desc" },
  });
  return res.render("pages/profile", { user, logedUser });
}

//Follow Button
async function userFollow(req, res) {
  const userId = req.user._id;
  const user = await User.findById(req.params.id);

  if (user.followers.find((id) => id.toString() === userId.toString())) {
    await user.updateOne({ $pull: { followers: userId } });
    await req.user.updateOne({ $pull: { following: user._id } });
  } else {
    await user.updateOne({ $addToSet: { followers: userId } });
    await req.user.updateOne({ $addToSet: { following: user._id } });
  }

  return res.redirect(req.get(`referer`));
}

//Like Tweet
async function tweetLikes(req, res) {
  const userId = req.user._id;
  const tweet = await Tweet.findById(req.params.tweetId);

  if (tweet.likes.find((id) => id.toString() === userId.toString())) {
    await tweet.updateOne({ $pull: { likes: userId } });
  } else {
    await tweet.updateOne({ $addToSet: { likes: userId } });
  }

  return res.redirect(req.get(`referer`));
}

//Followers Render
async function showFollowers(req, res) {
  const user = await User.findOne({ _id: req.session.passport.user }).populate("followers");
  return res.render("pages/followers", { user });
}

// Following Render
async function showFollowing(req, res) {
  const user = await User.findOne({ _id: req.session.passport.user }).populate("following");
  return res.render("pages/following", { user });
}

// Otros handlers...
// ...

module.exports = {
  index,
  store,
  //edit,
  update,
  destroy,
  showCreate,
  showUserTweets,
  userFollow,
  tweetLikes,
  showFollowers,
  showFollowing,
};
