import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: [],
  reducers: {
    create(state, action) {
      state = action.payload;
    },
    destroy(state, action) {
      return state.filter((tweet) => tweet.id !== action.payload);
    },
    like(state, action) {
      const tweetLiked = state.find((tweet) => tweet.id === action.payload);
      if (tweetLiked.isLiked === false) {
        tweetLiked.isLiked = true;
      } else {
        tweetLiked.isLiked = false;
      }
    },
  },
});

export const { create, destroy, like } = tweetSlice.actions;

export default tweetSlice.reducer;
