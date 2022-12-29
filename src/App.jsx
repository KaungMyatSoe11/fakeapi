import { useEffect, useState } from "react";
import BookTable from "./components/BookTable";
import { GetBooksData } from "./api/book";

function App() {
  const [books, setBooks] = useState([]);

  const BooksData = async () => {
    setBooks(await GetBooksData());
  };

  useEffect(() => {
    BooksData();
  }, []);

  return (
    <>{books.length == 0 ? <h2>Loading...</h2> : <BookTable books={books} />}</>
  );
}

export default App;
