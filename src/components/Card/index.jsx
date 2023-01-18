import React, { useContext } from "react";
import CardItem from "./CardItem";

const Card = ({books}) => {
  return (
    <div className="flex flex-row flex-wrap  gap-10   ">
      {books.map((book) => (
        <CardItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Card;

