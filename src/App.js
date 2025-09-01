import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import ContactUs from "./Components/ContactUs/ContactUs";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
import Test from "./Components/Test/Test";
import Products from "./Components/Products/Products";
import "./Components/font/font.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={
            <h2 style={{ 
              marginTop: "48px",
              fontFamily: "'MyFont', 'Arial', 'Helvetica', sans-serif"
            }}>
              Products Page
            </h2>
          } />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={
            <h2 style={{ 
              marginTop: "48px",
              fontFamily: "'MyFont', 'Arial', 'Helvetica', sans-serif"
            }}>
              Wishlist Page
            </h2>
          } />
          <Route path="/cart" element={
            <h2 style={{ 
              marginTop: "48px",
              fontFamily: "'MyFont', 'Arial', 'Helvetica', sans-serif"
            }}>
              Cart Page
            </h2>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;