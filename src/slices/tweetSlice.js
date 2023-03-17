import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    setTweets(state, action) {
      return action.payload;
    },
    add(state, action) {
      state.push(action.payload);
    },
    destroy(state, action) {
      return state.filter((tweet) => tweet.id !== action.payload);
    },
    like(state, action) {
      const tweetLiked = state.find(
        (tweet) => tweet.id === action.payload.tweetId
      );
      if (!tweetLiked.likes.includes(action.payload.user.id)) {
        tweetLiked.likes.push(action.payload.user.id);
      } else {
        const index = tweetLiked.likes.indexOf(action.payload.user.id);
        tweetLiked.likes.splice(index, 1);
      }
    },
  },
});

export const { setTweets, add, destroy, like } = tweetSlice.actions;

export default tweetSlice.reducer;
