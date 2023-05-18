import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import Modal from "./components/Modal";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";
import BookmarkListPage from "./pages/BookmarkListPage";
import Footer from "./components/Footer";
import ToastContainer from "./components/ToastContainer";

function App() {
  const modalState = useSelector((state) => state.modal.check);

  return (
    <>
      <Header />
      {modalState && <Modal />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/list" element={<ProductListPage />} />
        <Route path="/bookmark" element={<BookmarkListPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
