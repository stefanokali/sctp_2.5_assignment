import React from "react";
import './Total.css'

const Total = ({ sumTotalPrice, sumTotalDiscount }) => {
  return (
    <div className="Total">
      <div>Total price ${sumTotalPrice}</div>
      <div>Total discount ${sumTotalDiscount}</div>
    </div>
  );
};

export default Total;
