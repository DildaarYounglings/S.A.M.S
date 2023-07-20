import React, { useContext, useRef } from "react";
import { auth } from "../Firebase/firebase";
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/Context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navLinkRef = useRef();
  let navigate = useNavigate();
  // sign out function
  const signUserOut = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <div>
      <h1>{user.email} You have successfully logged in</h1>
      <br />
      <br />
      <button
        onClick={() => signUserOut}
        style={{
          color: "white",
          backgroundColor: "black",
          width: "200px",
          height: "50px",
          borderRadius: "13px",
          cursor: "pointer",
        }}
      >
        Log Out
      </button>
      <button onClick={() => navigate("/dashboard")}
        style={{
          color: "white",
          backgroundColor: "black",
          width: "200px",
          height: "50px",
          borderRadius: "13px",
          cursor: "pointer",
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default Dashboard;
