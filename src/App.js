import React from "react";
import { Link } from "react-router-dom";

export default class App extends React.Component {
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
        <h1>Home page</h1>
        <div>
          <img
            src="https://play-lh.googleusercontent.com/5rS-un965hkZuqUNA65RwkeqmGko91DVQHlAMCQ9lJlNguvXkCQzjl6OgAMOPZ2cCk4"
            alt="Home"
          />
        </div><br/>
        <Link to="/profile">Go back to profile</Link>
      </div>
    );
  }
}
