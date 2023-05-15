import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: { check: false, item: null },
  reducers: {
    add: (state, action) => {
      return { check: !state.check, item: action.payload };
    },
    remove: () => {
      return { check: false, item: null };
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
