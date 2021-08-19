import React, { createContext, useReducer } from "react";
import { BookReducer } from "../Reducers/BookReducer";
export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, []);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
