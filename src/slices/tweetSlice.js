import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: null,
  reducers: {
    create(state, action) {
      state = action.payload;
    },
    destroy(state, action) {
      return state.filter((tweet) => tweet.id !== action.payload);
    },
    like(state, action) {
      const tweetLiked = state.find((tweet) => tweet.id === action.payload);
      if (tweetLiked.liked === false) {
        tweetLiked.liked = true;
      } else {
        tweetLiked.liked = false;
      }
    },
  },
});

export const { create, destroy, like } = tweetSlice.actions;

export default tweetSlice.reducer;
