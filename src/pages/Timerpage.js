import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";
import React from "react";
import "../style.css";

export default class Timerpage extends React.Component {
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
        <h1>Time Will Count Up From 0:00 Untill 1:00 Than Reset To 0:00</h1>
        <div className="timecode">
          <Timer loop active duration={60 * 1000}>
            <Timecode />
          </Timer>
        </div>
        <h1>Time Will Count Up From 0:00 Than Will Struck at 0.11</h1>
        <div className="timecode">
          <Timer active duration={11 * 1000}>
            <Timecode />
          </Timer>
        </div>
      </div>
    );
  }
}
