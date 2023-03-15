import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    createUser(state, action) {
      return "creamos usuario";
    },
    deleteUser(state, action) {
      return "borramos usuario";
    },
    editUser(state, action) {
      return "abrimos de vuelta el sign up";
    },
    followUser(state, action) {
      return "seguir usuario";
    },
  },
});

export const { createUser, deleteUser, editUser, followUser } =
  userSlice.actions;

export default userSlice.reducer;
