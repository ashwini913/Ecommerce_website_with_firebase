/*const mapKeys = (obj, mapper) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [mapper(key)]: value,
    }),
    {}
  );*/

const product_reducer = (
  state = { products: [], searchedProducts: [], product: {} },
  action
) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "FETCH_SEARCHED_PRODUCTS":
      const data = action.payload.data;
      const term = action.payload.searchText;
      const searchedProducts = data.filter(
        (product) => product.title.toLowerCase().indexOf(`${term}`) !== -1
      );
      return {
        ...state,
        searchedProducts: searchedProducts,
      };
    case "FETCH_PRODUCT":
      return { ...state, product: action.payload };
    case "FETCH_CATEGORY_PRODUCTS":
      let products = action.payload.products;
      let searchCategory = action.payload.searchCategory;
      let categoryProducts = products.filter((product) =>
        product.category.match(new RegExp(`^${searchCategory}`))
      );
      return { ...state, categoryProducts: categoryProducts };
    default:
      return state;
  }
};

export default product_reducer;
