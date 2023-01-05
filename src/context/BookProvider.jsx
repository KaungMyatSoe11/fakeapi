import React, { createContext, useEffect, useState } from "react";
import { GetBooksData } from "../api/book";
import { data } from "../data";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(data);

  const Favorite = (id, is_favorite) => {
    console.log(id,is_favorite);
    books.map((book) => {
      if (book.id == id) {
        book.is_favorite = true;
      }
    });
    console.log(books);
  };

  // const GetBooksDataLoad = async () => {
  //   const data = await GetBooksData();
  //   setBooks(data);
  // };

  // useEffect(() => {
  //   GetBooksDataLoad();
  // }, []);

  return (
    <BookContext.Provider value={{ books, Favorite }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
