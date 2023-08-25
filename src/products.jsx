import React from 'react'
//importovanje komponente oneProduct
import OneProduct from "./oneProduct";

//pravljenje komponente products
const Products = ({products}) => {
    //propertiji
    const name = "New Product Name";
    const description = "New product description that we got from Product component using props.";
  return (
    <div className="all-products">
        <OneProduct product={products[0]}/>
        <OneProduct product={products[1]}/>
        <OneProduct product={products[2]}/>


    </div>
  );
};

export default Products;