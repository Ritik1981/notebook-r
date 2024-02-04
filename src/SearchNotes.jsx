import axios from "axios";
import { useState, useEffect } from "react";
function SearchNotes(props) {
  const { term } = props;
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/notes/matchedNotes/${term}`)
      .then((res) => {
        console.log(res.data.data);
        setNotes(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  const noteContainerStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    background: "#FFFFE0",
  };

  const noteTitleStyle = {
    color: "#333",
    fontSize: "1.5rem",
    marginBottom: "8px",
  };

  const noteContentStyle = {
    color: "#555",
    fontSize: "1rem",
  };
  const containerStyle = {
    height: "300px",
    overflowY: "auto",
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    background: "#87CEEB",
    borderRadius: "4px",
  };
  return (
    <div style={containerStyle}>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        notes.map((note) => (
          <div key={note._id} style={noteContainerStyle}>
            <h3 style={noteTitleStyle}>{note.title}</h3>
            <p style={noteContentStyle}>{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchNotes;
