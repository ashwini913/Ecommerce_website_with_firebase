import products from "../API/products.js";

export const fetch_products = () => async (dispatch) => {
  let response = await products.get("/products");
  dispatch({
    type: "FETCH_PRODUCTS",
    payload: response.data,
  });
};

export const fetch_searched_products = (searchText) => async (dispatch) => {
  let response = await products.get("/products");
  dispatch({
    type: "FETCH_SEARCHED_PRODUCTS",
    payload: { data: response.data, searchText: searchText },
  });
};

export const search_term = (searchterm) => async (dispatch) => {
  let response = await searchterm;
  dispatch({
    type: "SEARCH_TERM",
    payload: response,
  });
};

export const fetch_product = (id) => async (dispatch) => {
  let response = await products.get(`/products/${id}`);
  dispatch({
    type: "FETCH_PRODUCT",
    payload: response.data,
  });
};

export const add_to_cart = (product) => async (dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: product,
  });
};

export const fetch_category_products = (searchCategory) => async (dispatch) => {
  let response = await products.get("/products");
  dispatch({
    type: "FETCH_CATEGORY_PRODUCTS",
    payload: { products: response.data, searchCategory: searchCategory },
  });
};

export const remove_from_cart = (id) => async (dispatch) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: id,
  });
};

export const login = (user) => async (dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: user,
  });
};
