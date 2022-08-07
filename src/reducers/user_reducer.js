import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.js";

const user_reducer = (state = { user: {} }, action) => {
  let user = { ...state.user };
  let cart = user.cart ? [...user.cart] : [];
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "ADD_TO_CART":
      let id = action.payload.id;
      let isProductPresentInCart = cart.find((product) => product.id === id);
      if (isProductPresentInCart) {
        cart = cart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else cart.push({ ...action.payload, quantity: 1 });
      setDoc(doc(db, "users", user.id), { ...user, cart: cart });
      return { ...state, user: { ...user, cart: cart } };
    case "REMOVE_FROM_CART":
      let removalId = action.payload;
      let product = cart.find((product) => product.id === removalId);
      if (product.quantity > 1) {
        cart = cart.map((product) =>
          product.id === removalId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      } else cart = cart.filter((product) => product.id !== removalId);
      setDoc(doc(db, "users", user.id), { ...user, cart: cart });
      return {
        ...state,
        user: { ...user, cart: cart },
      };
    default:
      return state;
  }
};

export default user_reducer;
