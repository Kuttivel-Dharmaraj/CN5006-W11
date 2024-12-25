import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function BookUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:5000/";

  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  useEffect(() => {
    axios.get(url + "getbook/" + id).then((res) => {
      setState(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url + "updatebook/" + id, state).then((res) => {
      alert("Book updated successfully!");
      navigate("/DisplayBooksF1");
    });
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Update Book</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Book Title:</label>
          <input
            className="form-control"
            type="text"
            name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            className="form-control"
            type="text"
            name="author"
            value={state.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Topic:</label>
          <select
            className="form-control"
            name="Topic"
            value={state.Topic}
            onChange={handleChange}
          >
            <option value="Computer Science">Computer Science</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>
        <div className="form-group">
          <label>Format:</label>
          <div>
            <input
              type="radio"
              name="formate"
              value="Hard Copy"
              checked={state.formate === "Hard Copy"}
              onChange={handleChange}
            />{" "}
            Hard Copy
            <input
              type="radio"
              name="formate"
              value="Electronic Copy"
              checked={state.formate === "Electronic Copy"}
              onChange={handleChange}
            />{" "}
            Electronic Copy
          </div>
        </div>
        <div className="form-group">
          <label>Publication Year:</label>
          <input
            type="range"
            name="PubYear"
            min="1980"
            max="2025"
            value={state.PubYear}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Book
        </button>
      </form>
    </div>
  );
}
