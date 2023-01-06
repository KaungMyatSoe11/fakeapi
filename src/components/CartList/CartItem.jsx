import React from "react";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="book_img">
        <img
          src={item.image}
          alt={item.title}
          className="h-[130px] object-cover "
          width={100}
        />
      </div>
      <div className="flex gap-24 ">
        <div className="book_info flex flex-col gap-1.5 ">
          <h4 className="font-bold">{item.title}</h4>
          {/* <h4 className="font-light">{item.description}</h4> */}
          <p className="text-sm text-slate-500 ">{item.author}</p>
          <p className="text-sm text-slate-500 ">{item.published}</p>
        </div>
        <div className="book_action flex flex-col gap-1.5 ">
          <span className="text-green-500">Remove</span>
          <span className="text-green-500">Move to Favorite</span>
        </div>
        <div className="book_price font-extrabold ">${item.price}</div>
      </div>
    </>
  );
};

export default CartItem;
