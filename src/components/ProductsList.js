import React from "react";
import { Link } from "react-router-dom";
import { add_to_cart } from "../actions/index.js";
import { connect, useDispatch } from "react-redux";
import "../css/ProductsDisplay.css";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const onClicked = (product) => {
    dispatch(add_to_cart(product));
  };
  return (
    <div className="products_display">
      {products !== undefined &&
        products.map((product, index) => (
          <div className="product" key={product.id + index}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Link to={`/productView/${product.id}`}>
                      <img src={product.image} alt={product.title}></img>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="product_title">{product.title}</td>
                </tr>
                <tr>
                  <td className="product_price">Price : ${product.price}</td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => onClicked(product)}>
                      Add to cart
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};

export default connect(null, { add_to_cart })(ProductList);
