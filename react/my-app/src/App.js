import React from "react";
//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;

// {/*? <Routes>

// <Route exact path="/" element={<Products addToCard={this.addToCard}  />} />

// <Route path="/cart" element={<CartDetails  />} />

// <Route path="/register" element={<SignUp clearInput={this.clearInput} />} />

// <Route path="/SignIn" element={<SignIn clearInput={this.clearInput} />} />

// <Route element={<NotFound />} />
// </Routes> */}
