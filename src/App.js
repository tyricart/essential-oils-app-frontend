import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/styles.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import About from "./pages/About";
import Directory from "./pages/EODirectory";
import SingleOil from "./pages/SingleOil";
import Contact from "./pages/Contact";
import AdminBlog from "./pages/AdminBlog";
import AdminOil from "./pages/AdminOil";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-blog" element={<SingleBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/single-oil" element={<SingleOil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog-crud-queen" element={<AdminBlog />} />
        <Route path="/oil-crud-queen" element={<AdminOil />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
