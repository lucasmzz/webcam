import React from "react";
import "./App.css";
import WebcamDisplay from "./components/WebcamDisplay";
const App = () => {
  return (
    <div className="container">
      <h3 className="main-title">Webcam App</h3>
      <WebcamDisplay />
    </div>
  );
};

export default App;
