import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("image", image);
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    axios
      .post("/api/users/register", formdata)
      .then((res) => {
        console.log(res);
        navigate("/login");
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
    inputFile: {
      display: "block",
      marginBottom: "5px",
    },
    submitButton: {
      width: "100%",
    },
    loginText: {
      marginTop: "20px",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            <strong>Name</strong>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            name="name"
            style={styles.input}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div>
          <label htmlFor="image">
            <strong>Profile Photo</strong>
          </label>
          <input
            type="file"
            style={styles.inputFile}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success rounded-0"
          style={styles.submitButton}
        >
          Register
        </button>
      </form>
      <p style={styles.loginText}>
        Already Have an Account?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
export default Register;
