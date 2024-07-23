import React from 'react'
import Card from './Card'
// import { useLoaderData } from 'react-router-dom'

const Home = ({Product}) => {
  // const Products = useLoaderData();
  return (
    <div>
      <center>
        <h1>Home</h1>
       <div className="productName">
       {
        Product.map((product)=>(
            <Card product={product}/>
        ))
      }
       </div>
      </center>
    </div>
  )
}

export default Home

// export async function datafetching(){
//   let res = await fetch('https://fakestoreapi.com/products');
//   let data = res.json();
//   return data;
// }
