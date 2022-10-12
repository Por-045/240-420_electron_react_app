import React from "react";
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
        <h1>Welcome</h1>
        <h2>This Web-driven Desktop App has develop with Electron and React</h2>
        <div><br />
          <img
            style={{ height: "400px", width: "400px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png"
            alt="Electron"
          />
        </div>
        <br />
      </div>
    );
  }
}
