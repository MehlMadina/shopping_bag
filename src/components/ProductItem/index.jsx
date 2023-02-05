import React, { useContext } from "react";
import s from "./style.module.css";
import { Context } from "../../context";
import { HeartOutlined } from "@ant-design/icons";

export default function ProductItem({
  id,
  title,
  price,
  discountPercentage,
  stock,
  category,
  thumbnail,
}) {

  const { deleteProducts, increment, decrement } = useContext(Context);

  const procent = Math.round(100 - discountPercentage);
  const newPrice = `${(price * procent) / 100}`;

  return (
    <div className={s.product_card}>
      <HeartOutlined className={s.like_icon}/>
      <img src={ thumbnail } alt="#" />
      <p className={s.title}>{ title }</p>
      <div className={s.price_container}>
        <p className={s.old_price}>{ price }$</p>
        <p className={s.new_price}>{ newPrice }$</p>
      </div>
      <p className={s.category}>{ category }</p>
      <div className={s.triggers_btn}>
        <button onClick={() => decrement(id)}>-</button>
        <p> {stock }</p>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <button className={s.del_btn} onClick={() => deleteProducts(id)}>Delete</button>
    </div>
  );
}
