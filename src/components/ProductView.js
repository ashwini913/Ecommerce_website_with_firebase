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
            <i
              className={`ui star  icon `}
              style={{
                background: `linear-gradient(to bottom ,rgb(241, 172, 21))`,
              }}
            ></i>
            <i className={`ui star  icon`}></i>
            <i className={`ui star  icon`}></i>
            <i className={`ui star  icon`}></i>
            <i className={`ui star  icon`}></i>
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
