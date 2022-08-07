import React, { useEffect } from "react";
import { fetch_searched_products } from "../actions/index.js";
import { connect, useDispatch } from "react-redux";
import ProductList from "./ProductsList.js";
import "../css/ProductsDisplay.css";

const ProductsDisplay = ({ searchText, searchedProducts }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_searched_products(searchText));
  }, [searchText, dispatch]);
  return (
    <div>
      <ProductList products={searchedProducts} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchText: state.search_text_reducer.searchText,
    searchedProducts: state.products_reducer.searchedProducts,
  };
};
export default connect(mapStateToProps, { fetch_searched_products })(
  ProductsDisplay
);
