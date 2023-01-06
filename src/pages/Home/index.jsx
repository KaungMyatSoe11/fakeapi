import React, { useContext } from "react";
import Card from "../../components/Card";
import { BookContext } from "../../context/BookProvider";

const Home = () => {
  const { books } = useContext(BookContext);
  console.log(books);
  return (
    <div>
      {books.length === 0 ? (
        <h2 className="mt-[20%] ml-[40%] font-medium  text-5xl text-stone-700">
          Loading. . .
        </h2>
      ) : (
        <Card books={books} />
      )}
    </div>
  );
};

export default Home;
