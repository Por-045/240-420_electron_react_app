import React from "react";

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
        <h1>This is our member!!!</h1>
        <div
          style={{
            fontSize: "20px",
          }}
        >
          <ul>
            <li>
              <p>นาย สุทิวัส จารุสิริรังษี รหัสนักศึกษา 6110110476</p>
            </li>
            <li>
              <p>นาย จิรทีปต์ จันทร์เขียว รหัสนักศึกษา 6210110045</p>
            </li>
            <li>
              <p>นางสาว ชลธิชา คำหวาน รหัสนักศึกษา 6210110062</p>
            </li>
            <li>
              <p>นาย กรชนก เอียดนุสรณ์ รหัสนักศึกษา 6210110446</p>
            </li>
          </ul>
        </div>
        <div>
          <img
            style={{ height: "400px", width: "600px" }}
            src="https://bothwellphilharmonicchoir.files.wordpress.com/2012/05/members-group.jpg"
            alt="Profile"
          />
        </div>
      </div>
    );
  }
}
