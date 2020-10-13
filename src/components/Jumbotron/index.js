import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 75, textAlign: "center"}}
      className="jumbotron"
    >
      Employee Directory
    </div>
  );
}

export default Jumbotron;
