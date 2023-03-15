import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: [],
  reducers: {
    createTwt(state, action) {
      return "crear un tweet";
    },
    deleteTwt(state, action) {
      return "borrar un tweet";
    },
    likeATwt(state, action) {
      return "likear un tweet";
    },
  },
});

export const { createTwt, deleteTwt, likeATwt } = tweetSlice.actions;

export default tweetSlice.reducer;
