import React from "react";
import { Link } from "react-router-dom";
import "../css/ShopModal.css";

const ShopModal = () => {
  return (
    <div className="shop_display_modal">
      <div className="shop">
        Shop
        <ul className="modal_wrapper">
          <li>
            <Link to="/productsDisplay">Shop All</Link>
          </li>
          <li>
            <Link to="/categoryProducts/men">Men</Link>
          </li>
          <li>
            <Link to="/categoryProducts/women">Women</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShopModal;
