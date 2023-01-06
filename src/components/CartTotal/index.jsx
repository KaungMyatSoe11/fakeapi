import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartTotal = () => {
  const { cart } = useContext(CartContext);
  const intiValue = 0;
  const prices = cart.map((item) => item.price);
  console.log(prices);
  const cartPrices = prices.reduce(
    (next, current) => next + current,
    intiValue
  );
  return (
    <>
      <div className="flex items-center">
        <span>
          <h5 className="font-semibold">Subtotal: </h5>
        </span>
        <h1 className="text-3xl font-bold">${cartPrices}</h1>
      </div>
      <button>Checkout</button>
    </>
  );
};

export default CartTotal;
