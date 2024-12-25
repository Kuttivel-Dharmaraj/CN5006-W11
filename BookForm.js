import React, { useState } from "react";
import axios from 'axios';

export default function BookForm() {
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      booktitle: state.booktitle,
      PubYear: state.PubYear,
      author: state.author,
      Topic: state.Topic,
      formate: state.formate,
    };
    axios
      .post("http://localhost:5000/addbooks", bookData)
      .then((res) => console.log(res.data));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add Book</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Book Title: </label>
          <input
            className="form-control"
            type="text"
            name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Author: </label>
          <input
            className="form-control"
            type="text"
            name="author"
            value={state.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Topic: </label>
          <select
            className="form-control"
            name="Topic"
            value={state.Topic}
            onChange={handleChange}
          >
            <option value="Computer Science">CS</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>
        <div className="form-group">
          <label>Format: </label>
          <input
            className="form-check-label"
            type="radio"
            name="formate"
            value="Hard Copy"
            checked={state.formate === "Hard Copy"}
            onChange={handleChange}
          /> Hard Copy
          <input
            className="form-check-label"
            type="radio"
            name="formate"
            value="Electronic Copy"
            checked={state.formate === "Electronic Copy"}
            onChange={handleChange}
          /> Electronic Copy
        </div>
        <div className="form-group">
          <label>Publication Year (1980-2025): </label>
          <input
            type="range"
            name="PubYear"
            min="1980"
            max="2025"
            value={state.PubYear}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Add Book</button>
        </div>
      </form>
    </div>
  );
}
