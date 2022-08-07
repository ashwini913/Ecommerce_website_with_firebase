import React from "react";
import SearchBar from "./SearchBar.js";
import ShopModal from "./ShopModal.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../css/NavBar.css";

const NavBar = ({ user }) => {
  return (
    <div className="navbar_container">
      <div className="navbar_toggle_button"></div>
      <div>
        <ShopModal />
      </div>
      <div>
        <Link to="/">
          <i className="ui  home  icon"></i>
        </Link>
      </div>
      <div className="login">
        <Link to="/login">LogIn</Link>
      </div>
      <div>
        <Link to="/shoppingCart">
          <i className="ui shopping cart icon"></i>
          <span className="cartLength">{user.cart ? user.cart.length : 0}</span>
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user_reducer.user };
};
export default connect(mapStateToProps)(NavBar);
