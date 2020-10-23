import React from "react";
// import "./Receipt.scss";

export function Order(props) {
  let order = props.order;

  if (order == null) {
    return null;
  }

  return (
    <div className="receipt-container">
      <h1>{props.title}</h1>
      <div>
        <label>Bun</label>
        <input type="checkbox" readOnly checked={order.bun}></input>
      </div>
      <div>
        <label>Cheese</label>
        <input type="checkbox" readOnly checked={order.cheese}></input>
      </div>
      <div>
        <label>Lettuce</label>
        <input type="checkbox" readOnly checked={order.lettuce}></input>
      </div>
      <div>
        <label>Tomato</label>
        <input type="checkbox" readOnly checked={order.tomato}></input>
      </div>
      <div>
        <label>Onions</label>
        <input type="checkbox" readOnly checked={order.onions}></input>
      </div>
      <div>
        <label>Patty</label>
        <input type="checkbox" readOnly checked={order.patty}></input>
      </div>
      <div>
        <label>Condiments</label>
        <input type="checkbox" readOnly checked={order.condiments}></input>
      </div>
    </div>
  );
}
