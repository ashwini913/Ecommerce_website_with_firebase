import React from "react";
import Home from "./components/Home.js";
import LogIn from "./components/LogIn.js";
import SetAccount from "./components/SetAccount.js";
import ProductsDisplay from "./components/ProductsDisplay";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar.js";
import ProductView from "./components/ProductView.js";
import ShoppingCart from "./components/ShoppingCart.js";
import CategoryProducts from "./components/CategoryProducts";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/setAccount" element={<SetAccount />}></Route>
          <Route path={`/productView/:id`} element={<ProductView />}></Route>
          <Route path="/productsDisplay" element={<ProductsDisplay />}></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route
            path={`/categoryProducts/:search`}
            element={<CategoryProducts />}
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
