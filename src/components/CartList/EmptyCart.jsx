import React from "react";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/images/empty-cart.svg";


const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center w-full gap-y-6">
      <div className="img text-center">
        <img
          src={emptyCart}
          alt="empty cart"
          className="mx-auto"
          width={"30%"}
        />
      </div>
      <div>
        <span>Your cart is empty. Keep shopping to find a course!</span>
      </div>
      <div>
        <button className=" px-8 py-4 bg-yellow-500">
          <Link to="/">Keep Shopping</Link>
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
