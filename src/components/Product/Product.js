import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;

  return (
    <div className="product py-3">
      <div>
        {" "}
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p className="lead">by: {seller} </p>
        <p className="lead">Price: ${price} </p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
      </div>
    </div>
  );
};

export default Product;
