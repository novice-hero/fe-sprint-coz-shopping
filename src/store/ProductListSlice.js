import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: "productListSlice",
  initialState: {
    items: [],
    limit: 12,
    page: 0,
    viewLimit: 12,
    inview: false,
  },
  reducers: {
    updateItems: (state, action) => {
      state.items = action.payload;
    },
    clearItems: (state) => {
      state.items = [];
    },
    changeType: (state, action) => {
      state.currentType = action.payload;
    },
    changeId: (state, action) => {
      state.currentId = action.payload;
    },
    setInview: (state, action) => {
      state.inview = action.payload;
    },
  },
});

export const productListActions = productListSlice.actions;

export default productListSlice;
