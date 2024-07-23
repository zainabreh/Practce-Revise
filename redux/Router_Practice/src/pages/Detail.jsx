import React from "react";
// import { useParams } from "react-router-dom";
// import { Products } from "./Products";
// import {slug} from "./utilis/Slug";
import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const prod = useLoaderData();
  
// const {slugtitle} = useParams();
  // function findproductbyslug(slugtitle){
  //   return Products.find(p=>slug(p.title) === slugtitle);
  // }
  // let prod = findproductbyslug(slugtitle);

  return (
    <>

<div className="card" style={{ width: "18rem" }}>
        <img src={prod.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prod.title}</h5>
          <p className="card-text">{prod.description}</p>
        </div>
        <ul className="list-group list-group-flush">
        <li>{`Rating: ${prod.rating} + Items available ${prod.count}`}</li>
        </ul>
        <div className="card-body">
          <p className="card-link">{prod.price}</p>
          <p className="card-link">{prod.category}</p>
        </div>
      </div>
      
    </>
  );
};

export default Detail;

export const datafetchingbyId = async ({ params }) => {
  let { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  let data = res.json();
  return data;
}