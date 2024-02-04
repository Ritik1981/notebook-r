import React from "react";
import SearchComponent from "./Search";
function Home() {
  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      maxWidth: "600px",
      margin: "auto",
    },
    heading: {
      fontSize: "1.5em",
      color: "#333",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "1em",
      color: "#666",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.container}>
      <SearchComponent />
      <h2 style={styles.heading}>Welcome To Notebook</h2>
      <p style={styles.paragraph}>
        A Pocket Solution to all Your urgent Notes...
      </p>
    </div>
  );
}

export default Home;
