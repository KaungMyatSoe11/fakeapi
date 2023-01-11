import React, { useContext } from "react";
import CardItem from "./CardItem";
import BookContext from "../../context/BookProvider";

const Card = ({books}) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {books.map((book) => (
        <CardItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Card;

// const Card = ({ books }) => {
//   return (
//     // <table>
//     //   <thead>
//     //     <th>Title</th>
//     //     <th>Author</th>
//     //     <th>Genre</th>
//     //     <th>Description</th>
//     //     <th><abbr title="International Standard Book Number">ISBN</abbr></th>
//     //     <th>Image</th>
//     //     <th>Published</th>
//     //     <th>Publisher</th>
//     //   </thead>
//     //   <tbody>

//     //   </tbody>

//     // </table>

//   );
// };

// export default Card;
