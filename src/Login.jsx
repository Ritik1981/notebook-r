import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./App";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const setAccessToken = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fetching...");
    axios
      .post("http://localhost:8000/users/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("error fetching.");
        setIsLoggedIn(true);
        navigate("/profile");
        const { data, message, statuscode } = res.data;

        if (statuscode === 201) {
          setAccessToken(data.accessToken);
        }

        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const styles = {
    container: {
      textAlign: "center",
      maxWidth: "400px",
      margin: "auto",
      padding: "20px",
    },
    heading: {
      fontSize: "2em",
      marginBottom: "20px",
      color: "#333",
    },
    form: {
      textAlign: "left",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    },
    submitButton: {
      width: "100%",
    },
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            style={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            name="password"
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={styles.submitButton}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
