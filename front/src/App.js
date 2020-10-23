import React, { useState } from "react";
import { Receipt } from "../src/components/Receipt";
import { AllReceipts } from "../src/components/AllReceipts";
import "./App.scss";

function App() {
  const [bun, setBun] = useState(false);
  const [lettuce, setLettuce] = useState(false);
  const [tomato, setTomato] = useState(false);
  const [cheese, setCheese] = useState(false);
  const [onions, setOnions] = useState(false);
  const [patty, setPatty] = useState(false);
  const [condiments, setCondiments] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [allReceipts, setAllReceipts] = useState(null);

  const reset = () => {
    setBun(false);
    setLettuce(false);
    setTomato(false);
    setCheese(false);
    setOnions(false);
    setPatty(false);
    setCondiments(false);
  };

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

    reset();
  };

  const onSubmitReceipt = async () => {
    const res = await fetch("http://localhost:3001/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await res.json();
    setReceipt(body);
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
    setAllReceipts(body);
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
            checked={bun}
            onChange={(e) => setBun(e.target.checked)}
          ></input>
        </div>
        <div>
          <label>Cheese</label>
          <input
            type="checkbox"
            checked={cheese}
            onChange={(e) => setCheese(e.target.checked)}
          ></input>
        </div>
        <div>
          <label>Lettuce</label>
          <input
            type="checkbox"
            checked={lettuce}
            onChange={(e) => setLettuce(e.target.checked)}
          ></input>
        </div>
        <div>
          <label>Tomato</label>
          <input
            type="checkbox"
            checked={tomato}
            onChange={(e) => setTomato(e.target.checked)}
          ></input>
        </div>
        <div>
          <label>Onions</label>
          <input
            type="checkbox"
            checked={onions}
            onChange={(e) => setOnions(e.target.checked)}
          ></input>
        </div>
        <div>
          <label>Patty</label>
          <input
            type="checkbox"
            checked={patty}
            onChange={(e) => setPatty(e.target.checked)}
          ></input>
        </div>
        <div>
          <label>Condiments</label>
          <input
            type="checkbox"
            checked={condiments}
            onChange={(e) => setCondiments(e.target.checked)}
          ></input>
        </div>
        <div>
          <button onClick={onSubmit}>Submit</button>
        </div>
        <div>
          <button onClick={onSubmitReceipt}>Get Receipt</button>
          {/* <div>{getReceipt && JSON.stringify(getReceipt)}</div> */}
          <div>
            <Receipt
              order={receipt}
              onClose={() => {
                setReceipt(null);
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <button onClick={onSubmitAllReceipts}>Past Receipts</button>
            <div>
              <AllReceipts
                orders={allReceipts}
                onClose={() => {
                  setAllReceipts(null);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
