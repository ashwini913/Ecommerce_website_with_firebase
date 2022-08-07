import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetch_category_products } from "../actions/index.js";
import ProductList from "./ProductsList.js";

const CategoryProducts = ({ categoryProducts }) => {
  const dispatch = useDispatch();
  let pathname = window.location.pathname.split("/").pop();
  useEffect(() => {
    dispatch(fetch_category_products(pathname));
  }, [dispatch, pathname]);
  return (
    <div>
      <ProductList products={categoryProducts} />
      {console.log(categoryProducts)}
      {console.log(pathname)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { categoryProducts: state.products_reducer.categoryProducts };
};
export default connect(mapStateToProps, { fetch_category_products })(
  CategoryProducts
);
