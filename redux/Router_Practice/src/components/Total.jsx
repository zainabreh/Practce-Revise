import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Total = () => {
    const [tot,setTot] = useState(0)
    const cartItem = useSelector((v) => v.finalReducer.cartReducer.cart);
    console.log(cartItem);

    useEffect(()=>{
        let res = cartItem.reduce((a,item)=>a + item.price , 0)
        setTot(res.toFixed(3))
    },[cartItem])

  return (
    <>
      <div class="row g-3">
        <div class="col-7">
          Product:
          {cartItem.map((item) => (
            <p className="title">{item.title}</p>
          ))}
        </div>
        &nbsp;
        <div class="col">
          Price:
          {cartItem.map((item) => (
            <p className="price">{item.price}</p>
          ))}
        </div>
      </div>
      <hr />

      <div class="row mt-9">
        <label
          htmlFor="colFormLabelSm"
          class="col-sm-2 col-form-label col-form-label-sm"
        >
          Total:
        </label>
        <div class="col-md-7">
          {
            <p>{tot}</p>
          }
        </div>
      </div>
    </>
  );
};

export default Total;
