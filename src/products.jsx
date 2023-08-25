import React from 'react'
//importovanje komponente oneProduct
import OneProduct from "./oneProduct";

//pravljenje komponente products
const Products = () => {
  return (
    <div className="all-products">
        <OneProduct />
        <OneProduct />
        <OneProduct />


    </div>
  );
};

export default Products;