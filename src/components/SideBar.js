import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/SideBar.css";

const SideBar = ({ user }) => {
  const [open, setOpen] = useState(false);
  const onClicked = () => {
    setOpen(!open);
  };
  return (
    <div className={`sideBar ${open ? "active" : "closed"}`}>
      <div className="bar_icon_container">
        <i onClick={onClicked} className="ui large bars icon"></i>
      </div>
      <ul>
        <li className="user_name">
          <i className="ui big user circle icon"></i>
          <h3>Hello ,{user.name}</h3>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>Orders</li>
        <li>Category</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user_reducer.user };
};
export default connect(mapStateToProps)(SideBar);
