import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmarkSlice",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((v) => v.id !== action.payload);
    },
    update: (state, action) => {
      return action.payload;
    },
  },
});

export const bookmarkActions = bookmarkSlice.actions;

export default bookmarkSlice;
