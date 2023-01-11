import React from "react";
import CartList from "../../components/CartList";
import CartTotal from "../../components/CartTotal";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

const Cart = () => {
  return (
    <>
      <button className="bg-slate-800 mb-10 text-white rounded-full w-[50px] h-[50px]">
        <Link to="/">
          <div className="flex justify-center">
            <MdArrowBackIosNew size={22} />
          </div>
        </Link>
      </button>
      <h1 className="text-4xl font-extrabold">Shopping Cart</h1>
      <div className="flex gap-x-8 mt-5 relative">
        <CartList />

        <CartTotal />
      </div>
    </>
  );
};

export default Cart;
