import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contactme from "./components/Contactme";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contactme />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
