import React from "react";
import "./Cart.css";

const Cart = (props) => {
  //   console.log(props.cart);
  const { cart } = props;

  /* const totalReducer = (previous, product) => previous + product.price;
  const total = cart.reduce(totalReducer, 0); */
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }

  let shipping = 0;
  for (const product of cart) {
    shipping = shipping + 20;
  }
  const tax = (total + shipping) / 5;
  const grandtotal = total + shipping + tax;
  return (
    <div>
      <h3 className="text-center">Order Summary</h3>
      <h5 className="text-center">Items ordered: {props.cart.length} </h5>
      <p>Shipping & Handing: ${shipping} </p>
      <p>Total Tax: ${tax.toFixed(2)} </p>
      <p className="lead fw-bold text-danger border-bottom">Order Total: ${total.toFixed(2)} </p>
      <p className="fs-2 lead">Grand Total: ${grandtotal.toFixed(2)} </p>
      <div className="text-center">
        <button className="btn btn-warning">Review your order</button>
      </div>
    </div>
  );
};

export default Cart;
