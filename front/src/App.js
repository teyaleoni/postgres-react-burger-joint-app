import React, { useState } from "react";
import "./App.scss";

function App() {
  const [bun, setBun] = useState(false);
  const [lettuce, setLettuce] = useState(false);
  const [tomato, setTomato] = useState(false);
  const [cheese, setCheese] = useState(false);
  const [onions, setOnions] = useState(false);
  const [patty, setPatty] = useState(false);
  const [condiments, setCondiments] = useState(false);
  const [getReceipt, setGetReceipt] = useState(null);

  const onSubmit = async () => {
    await fetch("http://localhost:3001/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bun: bun,
        cheese: cheese,
        lettuce: lettuce,
        tomato: tomato,
        onions: onions,
        patty: patty,
        condiments: condiments,
      }),
    });
  };

  const onSubmitReceipt = async () => {
    const res = await fetch("http://localhost:3001/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await res.json();
    setGetReceipt(body);
    console.log(body);
  };

  const onSubmitAllReceipts = async () => {
    const res = await fetch("http://localhost:3001/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await res.json();
    console.log(body);
  };

  return (
    <div className="container">
      <h1>Burger Joint</h1>
      <h2>Build your own burger</h2>
      <div className="options-container">
        <div>
          <label>Bun</label>
          <input
            type="checkbox"
            value={bun}
            onChange={(e) => setBun(e.target.checked)}
          ></input>
        </div>
        <div>
          <label>Cheese</label>
          <input
            type="checkbox"
            value={cheese}
            onChange={(e) => setCheese(e.target.checked)}
          ></input>
        </div>
        <div>
          <label>Lettuce</label>
          <input
            type="checkbox"
            value={lettuce}
            onChange={(e) => setLettuce(e.target.checked)}
          ></input>
        </div>
        <div>
          <label>Tomato</label>
          <input
            type="checkbox"
            value={tomato}
            onChange={(e) => setTomato(e.target.checked)}
          ></input>
        </div>
        <div>
          <label>Onions</label>
          <input
            type="checkbox"
            value={onions}
            onChange={(e) => setOnions(e.target.checked)}
          ></input>
        </div>
        <div>
          <label>Patty</label>
          <input
            type="checkbox"
            value={patty}
            onChange={(e) => setPatty(e.target.checked)}
          ></input>
        </div>
        <div>
          <label>Condiments</label>
          <input
            type="checkbox"
            value={condiments}
            onChange={(e) => setCondiments(e.target.checked)}
          ></input>
        </div>
        <div>
          <button onClick={onSubmit}>Submit</button>
        </div>
        <div>
          <button onClick={onSubmitReceipt}>Get Receipt</button>
          <div>{getReceipt && JSON.stringify(getReceipt)}</div>
        </div>
        <div>
          <div>
            <button onClick={onSubmitAllReceipts}>Past Receipts</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
