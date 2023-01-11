import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const CartList = () => {
  const { cart } = useContext(CartContext);
  return (
    <div style={{ width: cart.length == 0 && "100%" }}>
      <h5 className="text-lg font-bold">{cart.length} Books in Cart</h5>

      {cart.length > 0 ? (
        <div className="flex flex-col gap-y-8 mt-3 ">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border-slate-600 border-y-[1px] py-5"
            >
              <CartItem item={item} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartList;
