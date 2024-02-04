import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Note() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [posted, setPosted] = useState(false);

  const navigate = useNavigate();
  const styles = {
    container: {
      textAlign: "center",
      maxWidth: "400px",
      margin: "auto",
      padding: "20px",
    },
    title: {
      fontSize: "1.5em",
      marginBottom: "20px",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
      resize: "none",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      outline: "none",
      transition: "background-color 0.3s ease",
    },
    successMessage: {
      color: "#28a745",
    },
    input: {
      width: "95%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
  };
  const handleNote = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/notes/addNote", {
        content: content,
        title,
      })
      .then((res) => {
        setPosted(true);
        setContent("");
        setTitle("");
        console.log(res);
      })
      .catch((err) => {
        setNote("");
        console.log(err);
      });
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Make Your Note</h2>
      {!posted ? (
        <form onSubmit={handleNote} style={styles.form}>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            placeholder="Note Title..."
          />
          <textarea
            type="text"
            value={content}
            placeholder="Start Writing..."
            onChange={(e) => setContent(e.target.value)}
            style={styles.textarea}
            rows={10}
            cols={40}
          />
          <button type="submit" style={styles.button}>
            Post
          </button>
        </form>
      ) : (
        <div style={styles.container}>
          <h3 style={styles.successMessage}>Posted Successfully...</h3>
          <button onClick={() => navigate("/myNotes")} style={styles.button}>
            My Notes
          </button>
        </div>
      )}
    </div>
  );
}
export default Note;
