import React from "react";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="/profile">Go back to profile</Link>
        <div>
          <img 
            src="https://play-lh.googleusercontent.com/5rS-un965hkZuqUNA65RwkeqmGko91DVQHlAMCQ9lJlNguvXkCQzjl6OgAMOPZ2cCk4" 
            alt="Home"
          />
        </div>
      </div>
    );
  }
}
