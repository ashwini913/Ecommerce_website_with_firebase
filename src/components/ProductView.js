import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetch_product } from "../actions/index";
import { add_to_cart } from "../actions/index";
import "../css/ProductView.css";

const ProductView = ({ product, user }) => {
  const [rating, setRating] = useState([0, 0, 0, 0, 0]);
  const dispatch = useDispatch();
  function setRate() {
    if (product.rating !== undefined) {
      let rate = product.rating.rate;
      let updated = rating.map((v) => {
        if (rate >= 1) {
          v = 100;
          rate = Number((rate - 1).toFixed(2));
        } else {
          v = rate * 100;
          rate = 0;
        }

        return v;
      });
      setRating(updated);
    }
  }
  useEffect(() => {
    const id = window.location.href.split("/").pop();
    dispatch(fetch_product(id));
    setRate();
  }, [product.id, dispatch]);

  const onClicked = (product) => {
    dispatch(add_to_cart(product));
  };

  return (
    product && (
      <div className="single_product_view">
        <div className="product_image">
          <img src={product.image} alt={product.title}></img>
        </div>
        <div className="product_info">
          <h1 className="product_name">{product.title}</h1>
          <div className="product_ratings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="star"
              fill="rgb(241, 172, 21)"
              viewBox="0 0 24 24"
              stroke="rgb(241, 172, 21)"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <i className={`ui star  icon `}></i>
          </div>

          <h3 className="price">${product.price}</h3>
          <div>
            <h3>Product description:</h3>
            <p>{product.description}</p>
          </div>
          <button id="addtocart" onClick={() => onClicked(product)}>
            <span className="add_to_cart_text">ADD TO CART</span>
            <i className="ui shopping cart icon"></i>
          </button>
          {console.log(product)}
          {console.log("rating=>", rating)}
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.products_reducer.product,
    user: state.user_reducer.user,
  };
};
export default connect(mapStateToProps, { fetch_product, add_to_cart })(
  ProductView
);
