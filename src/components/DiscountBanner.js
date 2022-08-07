import React from "react";
import "../css/DiscountBanner.css";

const DiscountBanner = () => {
  return (
    <div>
      <div className="banner_container">
        Flat 10% discount on ICICI debit/credit cards
      </div>
      <div className="discount_banner_container">
        <div className="banner2">
          <p>30% off</p>
        </div>
        <div className="banner3">
          <p>40% off</p>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
