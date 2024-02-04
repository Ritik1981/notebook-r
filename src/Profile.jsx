import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";
function Profile() {
  // since this route is a protected route so user can come to this page only if user is loggedIn
  // getting user details from backend server
  // show fullname, image, email
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState();
  const styles = {
    profilePic: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    button: {
      backgroundColor: "#007bff", // Bootstrap danger color
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

  useEffect(() => {
    axios
      .get("http://localhost:8000/users/profile")
      .then((res) => {
        setUserData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {loading && <p>Loading...</p>}
      {userData && (
        <div>
          <img
            src={userData.image} // replace .profilePic with how you store data in db
            alt="Profile"
            style={styles.profilePic}
          />
          <p>
            <strong>Username:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <button onClick={() => navigate("/myNotes")} style={styles.button}>
            Notes
          </button>
          <Logout />
          {/* You can add more details based on your response structure */}
        </div>
      )}
    </div>
  );
}
export default Profile;
