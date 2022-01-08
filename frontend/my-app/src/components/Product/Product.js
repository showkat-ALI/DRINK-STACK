import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = ({ price, plan, productId, subHead, headline, img }) => {
  return (
    <div className="product">
      <img src={img} alt={"lkag"} />

      <div className="product__info">
        <p className="info__name">{headline}</p>

        <p className="info__description">{subHead}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/drinks/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
