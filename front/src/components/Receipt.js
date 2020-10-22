import React from "react";
import { Order } from "./Order";
import "./Receipt.scss";

export function Receipt(props) {
  let order = props.order;

  if (order === null) {
    return null;
  }

  return (
    <div className="receipt-container">
      <Order title={"Order"} order={order} />
      <button onClick={props.onClose}>X</button>
    </div>
  );
}
