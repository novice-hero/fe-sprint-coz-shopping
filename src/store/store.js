import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmarkSlice";
import modalSlice from "./ModalSlice";
import productListSlice from "./ProductListSlice";
import toastSlice from "./toastSlice";

const store = configureStore({
  reducer: {
    bookmark: bookmarkSlice.reducer,
    modal: modalSlice.reducer,
    productList: productListSlice.reducer,
    toast: toastSlice.reducer,
  },
});

export default store;
