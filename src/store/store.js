import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmarkSlice";
import modalSlice from "./ModalSlice";
import productListSlice from "./ProductListSlice";

const store = configureStore({
  reducer: {
    bookmark: bookmarkSlice.reducer,
    modal: modalSlice.reducer,
    productList: productListSlice.reducer,
  },
});

export default store;
