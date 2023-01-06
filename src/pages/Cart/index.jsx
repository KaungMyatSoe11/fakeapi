import React from "react";
import CartList from "../../components/CartList";
import CartTotal from "../../components/CartTotal";

const Cart = () => {
  return (
    <>
      <h1 className="text-4xl font-extrabold">Shopping Cart</h1>
      <div className="flex gap-x-8 mt-5">
        <div>
          <CartList />
        </div>
        <div>
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default Cart;
