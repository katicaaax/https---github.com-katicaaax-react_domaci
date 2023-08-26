import React from 'react'
import {ImCart} from "react-icons/im";

function navBar({ cartNum }) {
  return (
    <div className="navBar">
        <a>Katy Beauty Shop</a>
        <a className="cart-items">
            <ImCart style={{marginLeft: 10}} />
            <div className="cart-num">{cartNum}</div>
        </a>
    </div>

  );
}

export default navBar;