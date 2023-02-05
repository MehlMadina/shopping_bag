import React, { useContext } from "react";
import { Context } from "../../context";
import s from './style.module.css';

export default function Total() {

  const { products } = useContext(Context);

  const totalCount = products.reduce((acc, { stock }) => acc + stock, 0);
  const totalOldSum = products.reduce(
    (acc, { stock, price }) => acc + stock * price,
    0
  );
  
  const totalNewSum = products.reduce(
    (acc, { stock, discountPercentage, price }) =>
      acc + stock * Math.round((price * (100 - discountPercentage)) / 100),
    0
  );

  return (
    <div className={s.total_value}>
      <p>Count : {totalCount}</p>
      <p>Cost without discount : {totalOldSum}$</p>
      <p>Total : {totalNewSum}$</p>
      <button>Buy</button>
    </div>
  );
}
