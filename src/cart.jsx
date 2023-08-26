
import React from "react";
import CartProduct from "./cartProducts";

const Cart = ({cartProducts}) => {
    return (
 <div className="cart-container">
<h1>Your cart contains the following:</h1>
{cartProducts.map((product) => (
    <CartProduct key={product.id} product={product} />
))}
 </div>
);
};

export default Cart;