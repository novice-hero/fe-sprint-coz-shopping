import { Route, Routes } from "react-router";
import Header from "./components/ui/Header";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";
import BookmarkListPage from "./pages/BookmarkListPage";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <>
      <Header />
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
