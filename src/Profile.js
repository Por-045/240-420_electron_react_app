import React from "react";
import { Link } from "react-router-dom";

export default class Profile extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>This is my profile</h1>
        <div>
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Profile"
          />
        </div><br/>
        <Link to="/">Go back to home</Link>
      </div>
    );
  }
}
