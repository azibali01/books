import { useState } from "react";
import "./005 index.css";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a book</h3>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Click me</button>
      </form>
    </div>
  );
}

export default BookCreate;
