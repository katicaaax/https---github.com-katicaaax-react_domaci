import React from 'react'
//importovanje komponente oneProduct
import OneProduct from "./oneProduct";

//pravljenje komponente products
const Products = () => {
    //propertiji
    const name = "New Product Name";
    const description = "New product description that we got from Product component using props.";
  return (
    <div className="all-products">
        <OneProduct prodName = {name} prodDesc = {description}/>
        <OneProduct prodName = {name} prodDesc = {description}/>
        <OneProduct prodName = {name} prodDesc = {description}/>


    </div>
  );
};

export default Products;