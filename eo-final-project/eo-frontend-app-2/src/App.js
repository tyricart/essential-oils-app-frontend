import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import "./assets/styles.css";
import Header from "./components/Header";
import About from "./pages/About";
import Directory from "./pages/EODirectory";
import SingleOil from "./pages/SingleOil";
import Contact from "./pages/Contact";
import AdminOil from "./pages/AdminOil";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Directory />} />
        <Route path="/single-oil" element={<SingleOil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminOil />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
