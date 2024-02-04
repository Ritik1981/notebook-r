import React, { useState } from "react";
import icon from "./assets/icon.png";
import SearchNotes from "./SearchNotes";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [clicked, setClicked] = useState(false);
  const handleSearch = () => {
    setClicked(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const searchContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputContainerStyle = {
    display: "flex",
    marginBottom: "10px",
  };

  const inputStyle = {
    padding: "8px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "20px",
    marginRight: "8px",
  };

  const buttonWithHoverStyle = {
    padding: "8px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const searchIconStyle = {
    width: "20px",
    height: "20px",
  };
  return (
    <div style={searchContainerStyle}>
      <div style={inputContainerStyle}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch} style={buttonWithHoverStyle}>
          <img src={icon} alt="Search" style={searchIconStyle} />
        </button>
      </div>

      {clicked && <SearchNotes term={searchTerm} />}
    </div>
  );
};

export default SearchComponent;
