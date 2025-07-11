import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setEditShow] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setEditShow(!showEdit);
  };
  const handleSubmit = (id, newTitle) => {
    setEditShow(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title} </h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
