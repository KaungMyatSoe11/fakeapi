import React, { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BookContext } from "../../../context/BookProvider";
import { CartContext } from "../../../context/CartProvider";
const CardItem = ({ book }) => {
  const [isFavorite, setIsFavorite] = useState(book.is_favorite);

  const { Favorite } = useContext(BookContext);
  const { addCart } = useContext(CartContext);

  const FavoriteHandler = () => {
    setIsFavorite(!isFavorite);
    Favorite(book.id, !isFavorite);
  };

  const AddCartHandler = () => {
    addCart(book);
  };
  return (
    <div className="bg-slate-800 w-[300px] p-5">
      <div className="relative cursor-pointer " style={{ fontSize: "25px" }}>
        {isFavorite ? (
          <AiFillHeart
            color="red"
            onClick={FavoriteHandler}
            className="w-[25px] z-10 absolute right-0 m-2"
          />
        ) : (
          <AiOutlineHeart
            color="red"
            onClick={FavoriteHandler}
            className="w-[25px] z-10 absolute right-0 m-2"
          />
        )}
        <img
          className="w-[270px] z-0 h-[270px] mt-10 relative"
          src={book.image}
          alt={book.title}
        />
      </div>

      <div className="bg-slate-800">
        <div className="px-3 py-3">
          <div className="text-purple-400">
            <h2 className="inline font-medium text-slate-400">Title - </h2>
            {book.title}
          </div>
          <div className="text-red-300">
            <h1 className="inline font-medium text-purple-400">Author -</h1>
            {book.author}
          </div>
          <div className="text-lime-300">
            <h1 className="inline font-medium text-red-300">Published -</h1>
            {book.published}
          </div>
          <div className="text-teal-400">
            <h1 className="inline font-medium text-teal-400">Genre -</h1>
            {book.genre}
          </div>
          <div className="text-blue-300">
            <h1 className="inline font-medium text-blue-300">Publisher -</h1>
            {book.publisher}
          </div>
        </div>
        <div style={{ fontSize: "25px" }} className="flex justify-between">
          <h4 className="text-white">${book.price}</h4>
          <BsFillCartPlusFill
            onClick={AddCartHandler}
            className="cursor-pointer"
            color="green"
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;

// <tr>
//   <td>{books.title}</td>
//   <td>{books.author}</td>
//   <td>{books.genre}</td>
//   <td>{books.description}</td>
//   <td>{books.isbn}</td>
//   <td>
//     <img src={books.image} style={{objectFit:"cover"}} width="200px" height="150px" alt={books.title} />
//     </td>
//   <td>{books.published}</td>
//   <td>{books.publisher}</td>

//   {/* {Object.entries(books).map(([key, value]) => {
//     if (key === "id") {
//       return;
//     }
//     if (key === "image") {
//       return(
//          <td>
//         <img
//           src={value}
//           style={{ objectFit: "cover" }}
//           width="200px"
//           height="150px"
//           alt={books.title}
//         />
//       </td>
//       )

//     }else {
//     return(
//       <td>{value}</td>
//     )
//     }
//   })} */}
// </tr>
