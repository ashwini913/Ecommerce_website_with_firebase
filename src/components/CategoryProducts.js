import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetch_category_products } from "../actions/index.js";
import ProductList from "./ProductsList.js";

const CategoryProducts = ({ categoryProducts }) => {
  const [pathName, setPathName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setPathName(window.location.pathname.split("/").pop());
    console.log("hello");
  }, [pathName]);
  useEffect(() => {
    dispatch(fetch_category_products(pathName));
  }, [dispatch, pathName]);
  return (
    <div>
      <ProductList products={categoryProducts} />
      {console.log(categoryProducts)}
      {console.log(pathName)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { categoryProducts: state.products_reducer.categoryProducts };
};
export default connect(mapStateToProps, { fetch_category_products })(
  CategoryProducts
);
