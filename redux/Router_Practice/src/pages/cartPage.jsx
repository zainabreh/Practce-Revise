import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveFromCart } from "../Features/cart/cartSlice";

const CartPage = () => {
  const disp = useDispatch()
  
  const handleDeleteItem = (id)=>{
    disp(RemoveFromCart(id))
  }

  const cartItems = useSelector((v) => v.finalReducer.cartReducer.cart);  

  return (
    <>
      <div className="cartContainer">
        {cartItems.length > 0 && cartItems.map((item) => (
          <div className="card" style={{ width: "15rem" , marginBlock:"50px"}} id={item.id}>
            <Link to={`/detail/${item.id}`}>
              <img src={item.image} className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "2.5rem" , marginBlock:"5px"}}>{item.title}</h5>
              <p className="card-text" style={{ fontSize: "2rem" , marginBlock:"15px"}}>{item.price}</p>
              {/* <p className="card-text" style={{ fontSize: "2rem" , marginBlock:"5px"}}>{item.description}</p> */}
              <button className="btn btn-danger" style={{ width: "100%" , paddingBlock:"15px" , fontSize: "1.5rem" , fontWeight: "bolder"}} onClick={()=>handleDeleteItem(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default CartPage;


