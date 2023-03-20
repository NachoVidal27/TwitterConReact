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
  },
});

export const { login, logout, follow, setUserTweets } = userSlice.actions;

export default userSlice.reducer;
