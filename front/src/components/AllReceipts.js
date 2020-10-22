import React from "react";
import { Order } from "./Order";
// import "./Receipt.scss";

export function AllReceipts(props) {
  let orders = props.orders;

  if (orders === null) {
    return null;
  }

  return (
    <div className="receipt-container">
      {orders.map((order, index) => (
        <Order order={order} title={index} />
      ))}
      <button onClick={props.onClose}>X</button>
    </div>
  );
}
