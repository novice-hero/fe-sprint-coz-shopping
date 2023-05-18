import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toastSlice",
  initialState: {
    toastQueue: [],
  },
  reducers: {
    enQueue: (state, action) => {
      state.toastQueue.length < 6 &&
        state.toastQueue.push({
          id: action.payload.id,
          content: action.payload.content,
        });
    },
    deQueue: (state) => {
      state.toastQueue.shift();
    },
    remove: (state, action) => {
      state.toastQueue.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const toastActions = toastSlice.actions;

export default toastSlice;
