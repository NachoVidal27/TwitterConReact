const User = require("../models/User");
const Tweet = require("../models/Tweet");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function showTweet(req, res) {}

// Tweet Area Render
async function showTweetById(req, res) {
  const { tweetId } = req.params;
  console.log(req.params);
  return res.render("tweet", { tweetId });
}

// Create Tweet
async function createTweet(req, res) {
  const user = await User.findOne({ _id: req.user });
  const tweet = new Tweet({
    userId: user,
    content: req.body.tweet,
  });
  user.tweets.push(tweet);
  const result = await user.save();
  await Tweet.create(tweet);

  return res.redirect("/home");
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Delete Tweet
async function destroyTweet(req, res) {
  await Tweet.findByIdAndDelete(req.params.id);
  return res.redirect(`/user/${req.user.id}`);
}

async function tweetLikes(req, res) {
  const userId = req.user._id;
  const tweet = await Tweet.findById(req.params.id);

  if (tweet.likes.find((id) => id.toString() === userId.toString())) {
    await tweet.updateOne({ $pull: { likes: userId } });
  } else {
    await tweet.updateOne({ $addToSet: { likes: userId } });
  }

  return res.redirect(req.get(`referer`));
}

//------<>------- Alternativo con Virtuals
// async function tweetLikes(req, res) {
//   const tweet = await Tweet.findById(req.params.id);
// const userIndex = tweet.likes.indexOf(req.user.idString, 0);

// if (userIndex === -1) {
//   tweet.likes.push(req.user.idString);
// } else {
//   tweet.likes.splice(userIndex, 1);
// }
//   return res.redirect("/home");
// }
//------<>-------

// Otros handlers...
// ...

module.exports = {
  index,
  showTweet,
  createTweet,
  edit,
  update,
  destroyTweet,
  showTweetById,
  tweetLikes,
};
