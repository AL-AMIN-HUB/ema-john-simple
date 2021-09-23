import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { name, img, seller, price, stock } = props.product;

  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="product py-3">
      <div className="me-2">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p className="lead">by: {seller} </p>
        <p className="lead">Price: ${price} </p>
        <p>
          <small>
            only <b>{stock}</b> left in stock - order soon
          </small>
        </p>
        <button onClick={() => props.handleAddToCart(props.product)} className="btn btn-warning fs-5 px-5">
          {cartIcon}
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
