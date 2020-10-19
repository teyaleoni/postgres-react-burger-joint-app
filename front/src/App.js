import React from "react";
import "./App.scss";

function App() {
  const onSubmit = async () => {
    await fetch("http://localhost:3001/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "ted",
      }),
    });
  };

  return (
    <div className="container">
      <h1>Burger Joint</h1>
      <h2>Build your own burger</h2>
      <label>Meat</label>
      <input type="checkbox" name="meat"></input>
      <label>Lettuce</label>
      <input type="checkbox" name="lettuce"></input>
      <label>Tomato</label>
      <input type="checkbox" name="tomato"></input>
      <label>Cheese</label>
      <input type="checkbox" name="cheese"></input>
      <label>Pickles</label>
      <input type="checkbox" name="pickles"></input>
      <label>Condiments</label>
      <input type="checkbox" name="condiments"></input>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;
