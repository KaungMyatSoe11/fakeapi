import React from "react";
import "./index.css";
import TableItem from "./TableItem";

const BookTable = ({ books }) => {
  return (
    <table>
      <thead>
        <th>Title</th>
        <th>Author</th>
        <th>genre</th>
        <th>Description</th>
        <th>
          <abbr title="International Standard Book Number ">ISBN</abbr>
        </th>
        <th>Image</th>
        <th>Published</th>
        <th>Publisher</th>
      </thead>
      <tbody>
        {books.map((book) => (
          <TableItem book={book} />
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
