import { useState } from "react";
import "./RandomNumber.css";

function RandomNumber() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div className="container">
      <h1 className="title">Random Number Generator</h1>

      <button className="button" onClick={generateNumber}>
        Generate Random Number
      </button>

      {number === null ? (
        <p className="message">No number generated yet</p>
      ) : (
        <h2 className="number">{number}</h2>
      )}
    </div>
  );
}

export default RandomNumber;