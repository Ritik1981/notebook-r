import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function AllNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [forceUpdate, setForceUpdate] = useState(false);
  const containerStyle = {
    height: "300px",
    overflowY: "auto",
    width: "300px",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    background: "#d3d3d3",
    borderRadius: "4px",
  };

  const headerStyle = {
    fontSize: "24px",
    marginBottom: "15px",
  };

  const loadingStyle = {
    fontSize: "16px",
    fontStyle: "italic",
  };

  const noteContainerStyle = {
    border: "1px solid #333333",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px 0",
    background: "#FFE4E1",
  };

  const noteTitleStyle = {
    fontSize: "20px",
    marginBottom: "10px",
  };

  const noteContentStyle = {
    fontSize: "16px",
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/notes/myNotes/${page}`) // don't send page for all notes
      .then((res) => {
        if (res.data && Array.isArray(res.data.data)) {
          setNotes(res.data.data);
          setLoading(false);
        } else {
          console.error("Invalid data structure. Expected an array.");
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, [page, forceUpdate]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/notes/deleteNote/${id}`);
      alert("Deleted...");
      setForceUpdate((prev) => !prev);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>My Notes:</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          style={{ flex: 1, textAlign: "center" }}
        >
          -
        </button>
        <button
          onClick={() => setPage(page + 1)}
          style={{ flex: 1, textAlign: "center" }}
        >
          +
        </button>
      </div>
      {loading ? (
        <p style={loadingStyle}>Loading...</p>
      ) : (
        <div>
          {notes.map((note) => (
            <div key={note._id} style={noteContainerStyle}>
              <h3 style={noteTitleStyle}>{note.title}</h3>
              <p style={noteContentStyle}>{note.content}</p>
              <button
                onClick={() => handleDelete(note._id)}
                style={{
                  backgroundColor: "#ff6961", // Light red color
                  color: "#fff", // White text color
                  padding: "10px 15px", // Padding for the button
                  border: "none", // No border
                  borderRadius: "4px", // Rounded corners
                  cursor: "pointer", // Cursor on hover
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllNotes;
