import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import { useState, createContext } from "react";
import Note from "./Note";
export const AppContext = createContext();
import Profile from "./Profile";
import AllNotes from "./AllNotes";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import SearchNotes from "./SearchNotes";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <GlobalStyle />
      <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar />
        <AppContainer>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/profile"
              element={isLoggedIn ? <Profile /> : <Login />}
            />
            {/*here replace home by profile comp. */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/note" element={isLoggedIn ? <Note /> : <Login />} />
            <Route
              path="/myNotes"
              element={isLoggedIn ? <AllNotes /> : <Login />}
            />
          </Routes>
        </AppContainer>
      </AppContext.Provider>
    </div>
  );
}

export default App;
