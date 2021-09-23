import React from "react";
import "./Cart.css";

const Cart = (props) => {
  //   console.log(props.cart);
  const { cart } = props;
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  return (
    <div>
      <h3 className="text-center">Order Summary</h3>
      <h5 className="text-center">Items ordered: {props.cart.length} </h5>
      <p className="lead text-center fw-bold">Total: {total} </p>
    </div>
  );
};

export default Cart;
