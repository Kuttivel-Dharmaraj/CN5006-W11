import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:5000/";

  useEffect(() => {
    axios.post(url + "deleteBook/" + id).then((res) => {
      alert("Book deleted successfully!");
      navigate("/DisplayBooksF1");
    });
  }, [id, navigate]);

  return (
    <div>
      <h3>Deleting book...</h3>
    </div>
  );
}
