import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmarkSlice";
import modalSlice from "./ModalSlice";

const store = configureStore({
  reducer: {
    bookmark: bookmarkSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
