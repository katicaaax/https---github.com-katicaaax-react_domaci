import React from 'react'
import {ImCart} from "react-icons/im";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from 'react-icons/ri';

function NavBar({ cartNum, onEmptyCart }) {
  return (
    <div className="navBar">
      <Link to="/">Katy Beauty Shop</Link>
      <Link to="/cart" className="cart-items">
        <ImCart style={{ marginLeft: 10 }} />
        <div className="cart-num">{cartNum}</div>
        <Link>
        </Link>
      <div className="empty-cart-button">
        <button onClick={onEmptyCart}>
          <RiDeleteBin6Line />
          Empty Cart
        </button>
      </div>
      </Link>
      <div className="meet-team-link">
        <Link to="/meetTeam">Meet the Team</Link>
      </div>
    </div>
  );
}


export default NavBar;

