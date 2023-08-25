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
        {products.map(product => (
            <OneProduct product ={product} />
        ))}

    </div>
  );
};

export default Products;