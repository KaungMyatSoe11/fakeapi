import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import Card from "../../components/Card";

const Favorite = () => {
  const { books } = useContext(BookContext);
  const filterBooks = books.filter((item) => item.is_favorite );
  return (
    <>
      <h1>Favorite Books</h1>
      {filterBooks.length > 0 && <Card books={filterBooks} />}
    </>
  );
};

export default Favorite;
