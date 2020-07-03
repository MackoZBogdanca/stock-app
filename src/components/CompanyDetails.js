import React, { useState } from "react";

const StockDetails = ({ price, date, time }) => {
  const [stock, setStock] = useState({});

  return (
    <>
      <div>{price}</div>
      <div>{date}</div>
      <div>{time}</div>
    </>
  );
};

export default StockDetails;
