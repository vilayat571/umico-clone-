import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./pages/Products/index";
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Privacy from './pages/Privacy';
import Mycart from './pages/Mycart';
import TermsOfUse from './pages/TermsOfUse'
import Single from "./pages/Products/[id]";
import Header from "./components/Header";
import Myaccount from "./pages/Account/Myaccount";
import Fotter from "./components/Fotter";
import Singleproduct from "./pages/Products/[slug]";
import Resultpage from "./pages/Resultpage";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <hr className=" bg-white text-white " />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Product />} />
          <Route exact path="/categories/:id" element={<Single />} />
          <Route exact path="/product/:slug" element={<Singleproduct />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/cart" element={<Mycart />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/termsofuse" element={<TermsOfUse />} />
          <Route exact path="/account" element={<Myaccount />} />
          <Route exact path="/resultpage" element={<Resultpage />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;