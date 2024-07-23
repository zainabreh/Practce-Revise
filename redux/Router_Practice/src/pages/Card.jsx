import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddToCart } from "../Features/cart/cartSlice";
// import { slug } from "../utilis/Slug";

const Card = ({ product }) => {
const [addProduct,setAddProduct] = useState(false)
  const dispatchProd = useDispatch();

  const handleCart = (prod) => {
    dispatchProd(AddToCart(prod))
    setAddProduct(true)
  }

  return (
    <>
      <div className="card" style={{ width: "12rem" }} id={product.id}>
        <Link to={`/detail/${product.id}`}>
          <img src={product.image} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price}</p>
        </div>
        {
          addProduct ? (<button className="btn btn-danger">Added</button>) : (<button className="btn btn-primary" onClick={()=>handleCart(product)}>Add To Cart</button>)
        }
        
      </div>
    </>
  );
};

export default Card;
