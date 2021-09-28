import React from "react";
import TouchForm from "./components/TouchForm.js";
import './App.css';

function App() {
  return (
    <body>
      <center>
        <div className="Container">
          <div className="text">
            <h1>Get in touch </h1>
            <p>Fill the contact form below and we will reach back to you shortly</p>
          </div>
          <div className="information">
            <TouchForm />
          </div>
        </div>
      </center>
    </body>
  );
}

export default App;
