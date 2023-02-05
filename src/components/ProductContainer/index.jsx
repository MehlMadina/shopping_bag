import React from "react";
import { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import { Context } from "../../context";
import Total from "../Total";
import s from './style.module.css';

export default function ProductContainer() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch(" https://dummyjson.com/products");
      const data = await resp.json();
      setProducts(data.products);
    })();
  }, []);


  const deleteProducts = (delId) => {
    const newArr = products.filter(({ id }) => id !== delId);
    setProducts(newArr);
  };


  const increment = (value) => {
    const target = products.find(({ id }) => id === value);
    target.stock++;
    setProducts([...products]);
  };


  const decrement = (value) => {
    const target = products.find(({ id }) => id === value);
    target.stock--;

    if (target.stock === 0) {
      setProducts(products.filter((el) => el !== target));
    } else {
      setProducts([...products]);
    }
  };


  return (
    <div className={s.block_container}>
      <Context.Provider
        value={{ products, deleteProducts, increment, decrement }}
      >
        {products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
        <Total />
      </Context.Provider>
    </div>
  );
}
