import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { remove_from_cart } from "../actions/index.js";
import "../css/ShoppingCart.css";

const ShoppingCart = ({ user }) => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const calculateTotal = () => {
    if (user.cart.length > 0) {
      let tot = Number(user.cart.reduce((a, b) => a + b.price, 0).toFixed(2));
      setTotal(tot);
    }
  };
  useEffect(() => {
    if (user.cart) setCart(user.cart);
    if (user.cart) calculateTotal();
  }, [user]);
  const onClicked = (id) => {
    dispatch(remove_from_cart(id));
  };
  return (
    <div>
      {cart.length > 0 && (
        <div className="cart_product_list">
          {cart.length > 0 &&
            cart.map((product) => {
              return (
                <div className="cart_product" key={product.id}>
                  <div className="cart_product_image">
                    <img src={product.image} alt={product.title}></img>
                  </div>
                  <div className="cart_product_info">
                    <div className="cart_product_title">
                      <h3>{product.title}</h3>
                    </div>
                    <div className="cart_quantity_price_container">
                      <div className="cart_product_quantity">
                        <h5>Quantity:{product.quantity}</h5>
                      </div>
                      <div className="cart_product_price">
                        <h4>${product.price}</h4>
                      </div>
                    </div>
                    <div>
                      <i
                        onClick={() => onClicked(product.id)}
                        className="ui trash can  icon"
                      ></i>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="cart_summary">
            <h2>Cart Summary</h2>
            <div className="total">
              <div className="total_label">
                <span>Total</span>
              </div>
              <div className="total_value">
                <span>${total}</span>
              </div>
            </div>
            <div className="shipping_cost">
              <div className="shipping_cost_label">
                <span>Shipping cost</span>
              </div>
              <div className="shipping_cost_value">
                <span>+$20</span>
              </div>
            </div>
            <div className="grand_total">
              <div className="grand_total_label">
                <span>Total Amount</span>
              </div>
              <div className="grand_total_value">
                <span>${Number((total + 20).toFixed(2))}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {cart.length === 0 && (
        <div className="empty_cart">
          <h1>Cart is empty</h1>
        </div>
      )}
      {console.log("cart", cart)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user_reducer.user,
  };
};
export default connect(mapStateToProps, { remove_from_cart })(ShoppingCart);
