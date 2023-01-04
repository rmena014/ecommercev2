import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SideNavBar from "./components/SideNavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <SideNavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
