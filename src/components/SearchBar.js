import React, { useState } from "react";
import { search_term } from "../actions/index.js";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/SearchBar.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(search_term(searchText));
    navigate("/productsDisplay");
  };
  return (
    <div>
      <form className="search_form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="search here"
          value={searchText}
          onChange={onInputChange}
        ></input>
        <button className="search_icon">
          <i className="ui search icon"></i>
        </button>
      </form>
    </div>
  );
};

export default connect(null, { search_term })(SearchBar);
