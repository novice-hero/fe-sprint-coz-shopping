import { createSlice } from "@reduxjs/toolkit";

const tabs = [
  { id: 0, url: "/tab_all.png", title: "전체", type: "All" },
  { id: 1, url: "/tab_product.png", title: "상품", type: "Product" },
  { id: 2, url: "/tab_category.png", title: "카테고리", type: "Category" },
  { id: 3, url: "/tab_exhibition.png", title: "기획전", type: "Exhibition" },
  { id: 4, url: "/tab_brand.png", title: "브랜드", type: "Brand" },
];

const tabSlice = createSlice({
  name: "tabSlice",
  initialState: { tabs, currentId: 0, currentType: "All" },
  reducers: {
    changeId: (state, action) => {
      state.currentId = action.payload;
    },
    changeType: (state, action) => {
      state.currentType = action.payload;
    },
    reset: (state) => {
      state.currentId = 0;
      state.currentType = "All";
    },
  },
});

export const tabActions = tabSlice.actions;

export default tabSlice;
