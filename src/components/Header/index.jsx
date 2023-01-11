import React, { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="container px-10 bg-slate-800">
        <div className="flex px-3 py-6  justify-end">
          <div className="cart relative cursor-pointer">
            <Link to="/cart">
              {cart.length > 0 && (
                <div className="absolute top-[-10px] left-[50%] text-sm w-[20px] h-[20px] flex items-center justify-center bg-yellow-400 rounded-full">
                  <span>{cart.length}</span>
                </div>
              )}
              <BsFillCartFill size={22} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
