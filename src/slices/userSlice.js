import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUserTweets(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    login(state, action) {
      // state = action.payload;
      console.log(state);
      return action.payload;
    },
    logout(state, action) {
      return null;
    },
    follow(state, action) {
      return "seguir usuario";
    },
    add(state, action) {
      state.push(action.payload);
    },
  },
});

export const { login, logout, follow, setUserTweets, add } = userSlice.actions;

export default userSlice.reducer;
