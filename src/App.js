import BookCreate from "./components/BookCreate";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    console.log("Need to add the title with: ", title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
