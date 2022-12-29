import React from "react";

const TableItem = ({ book }) => {
  console.log(Object.entries(book));
  return (
    <tr>
      {/* <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.description}</td>
      <td>{book.isbn}</td>
      <td>
        <img
          src={book.image}
          style={{ objectFit: "cover" }}
          width="100px"
          height={"150px"}
          alt={book.title}
        />
      </td>
      <td>{book.published}</td>
      <td>{book.publisher}</td> */}
      {Object.entries(book).map(([key, value]) => {
        if (key === "id") {
          return;
        }
        if (key === "image") {
          return (
            <td>
              <img
                src={value}
                style={{ objectFit: "cover" }}
                width="100px"
                height={"150px"}
                alt={book.title}
              />
            </td>
          );
        } else {
          return <td>{value}</td>;
        }
      })}
    </tr>
  );
};

export default TableItem;
