import React, { useState } from "react";
import { Order } from "./Order";
// import "./Receipt.scss";

export function AllReceipts(props) {
  let orders = props.orders;
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (orders === null) {
    return null;
  }

  return (
    <div className="receipt-container">
      {orders.map((order, index) => (
        <button
          onClick={() => {
            setSelectedIndex(index);
          }}
          order={order}
        >
          {index}
        </button>
      ))}
      <Order title={`Order ${selectedIndex}`} order={orders[selectedIndex]} />
      <button onClick={props.onClose}>X</button>
    </div>
  );
}
