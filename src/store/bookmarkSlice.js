import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.length
  ? JSON.parse(localStorage.getItem("bookmark"))
  : [];

const bookmarkSlice = createSlice({
  name: "bookmarkSlice",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((v) => v.id !== action.payload);
    },
  },
});

export const bookmarkActions = bookmarkSlice.actions;

export default bookmarkSlice;
