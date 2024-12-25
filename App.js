import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBook from "./components/AddBook";
import BookUpdate from "./components/BookUpdate";
import DisplayBooksF1 from "./components/DisplayBooksF1";
import DeleteBook from "./components/DeleteBook";

export default function App() {
  return (
    <Router>
      <div className="container">
        <center>
          <h2>On-Line Book Library Using React</h2>
        </center>
        <br />
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <Link to="/" className="navbar-brand">
            <h4>Add a Book</h4>
          </Link>
          <Link to="/DisplayBooksF1" className="navbar-brand">
            <h4>Display All Books</h4>
          </Link>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<AddBook />} />
          <Route path="/edit/:id" element={<BookUpdate />} />
          <Route path="/Delete/:id" element={<DeleteBook />} />
          <Route path="/DisplayBooksF1" element={<DisplayBooksF1 />} />
        </Routes>
      </div>
    </Router>
  );
}
