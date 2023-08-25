import React from "react";
import {ImCheckboxChecked} from "react-icons/im";
import {FaMinusSquare} from "react-icons/fa";

const OneProduct = (props) => {
    //pravimo promenljivu za stilizovanje
    const design = {margin: 10, borderStyle: "dashed"};
  return (
    //prosledjujemo promenljivu za stilizovanje
    <div className="card" style = {design}> 
        <img className="card-img-top" src="https://picsum.photos/200" alt="Neka slika"/>
        <div className="card-body">
            <h3 className="card-title">{props.prodName}</h3>
            <p className="card-text">{props.prodDesc}</p>
            <button className="btn">
                < ImCheckboxChecked />
            </button>
            <button className="btn">
                <FaMinusSquare />
                </button>
        </div>
    </div>
  );
};

export default OneProduct;