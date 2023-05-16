import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: "productListSlice",
  initialState: {
    currentType: "All",
    currentId: 0,
    items: [],
    limit: 12,
    endPage: null,
    inview: false,
  },
  reducers: {
    addItems: (state, action) => {
      state.items = [...state.items, ...action.payload];
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
    setEndPage: (state, action) => {
      state.endPage = action.payload;
    },
    setInview: (state, action) => {
      state.inview = action.payload;
    },
  },
});

export const productListActions = productListSlice.actions;

export default productListSlice;
