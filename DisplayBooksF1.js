import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

export default function DisplayBooksF1() {
  const [books, setBooks] = useState([]);
  const url = "http://localhost:5000/";

  useEffect(() => {
    axios.get(url + "allbooks").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div style={{ marginTop: 10 }}>
      <h3>All Books</h3>
      <DisplayData books={books} />
    </div>
  );
}
