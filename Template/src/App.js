import React from "react"
import './App.css';
import Cards from "./components/Cards";

function App() {
  let pics = ["Images/card1.jpg", "Images/card2.jpg", "Images/card3.jpg"]
  let title = ["WEDDINGS FLOWERS", "PRIVATE EVENTS", "BIRTHDAYS BOUQUETS"]
  return (
    <div className="u-body">

      <div className="text-body">
        <h3 className="text1">Beautiful</h3>
        <h1 className="text2">Blooms</h1>
        <h2 className="text3">For Every Occasion</h2>
        <a href="#" className="text4">place an order</a>
      </div>
      <Cards pics={pics} title={title} />
      <div className="footer">
        <p>Sample text. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        <div className="link">
          <a calssName="links" href="https://nicepage.com/website-templates">Template </a>
          <span>created with </span>
          <a className="links" href="https://nicepage.com/website-builder" target="_blank">Nicepage</a>
        </div>

      </div>
    </div>




  );
}

export default App;




