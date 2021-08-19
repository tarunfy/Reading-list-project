import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Book-Title"
        required
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        placeholder="Author"
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default BookForm;
