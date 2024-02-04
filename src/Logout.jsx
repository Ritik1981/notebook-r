import { useContext } from "react";
import { AppContext } from "./App";
import { useNavigate } from "react-router-dom";

// Export it to profile component
function Logout() {
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const styles = {
    container: {
      textAlign: "center",
      marginTop: "20px",
    },
    button: {
      backgroundColor: "#dc3545", // Bootstrap danger color
      color: "#fff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "4px",
      cursor: "pointer",
      border: "none",
      outline: "none",
      transition: "background-color 0.3s ease",
    },
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <button onClick={handleLogout} style={styles.button}>
        Logout
      </button>
    </div>
  );
}
export default Logout;
