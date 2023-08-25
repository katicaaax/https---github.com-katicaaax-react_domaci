import React from 'react'
import {ImCart} from "react-icons/im";

function navBar() {
  return (
    <div className="navBar">
        <a>My Store</a>
        <a className="cart-items">
            <ImCart style={{marginLeft: 10}} />
            <div className="cart-num">0</div>
        </a>
    </div>

  );
}

export default navBar;