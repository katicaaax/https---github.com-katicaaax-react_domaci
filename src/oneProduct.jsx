import React from "react";
import {ImCheckboxChecked} from "react-icons/im";
import {FaMinusSquare} from "react-icons/fa";
import Products from "./products";

const OneProduct = ({product}) => {
    //pravimo promenljivu za stilizovanje
    const design = {margin: 10, borderStyle: "dashed"};
    const addToCart = () => {
        product.amount = product.amount + 1;
        console.log("product id=", product.id, "amount=", product.amount);
    };
    const remFromCart = () => {
        if(product.amount > 0){
            product.amount = product.amount - 1;
            console.log("product id=", product.id, "amount=", product.amount);
        }else{
            alert("Amount of product is already 0.");
        }
    };
  return (
    //prosledjujemo promenljivu za stilizovanje
    <div className="card" style = {design}> 
        <img className="card-img-top" src={product.imageLink} alt="Product Photo" style={{ width: '250px', height: '200px' }}/>
        <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">{product.description}</p>
            <button className="btn" onClick={addToCart}>
                < ImCheckboxChecked />
            </button>
            <button className="btn" onClick={remFromCart}>
                <FaMinusSquare />
                </button>
        </div>
    </div>
  );
};

export default OneProduct;