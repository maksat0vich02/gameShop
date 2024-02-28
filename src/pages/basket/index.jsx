import React, { useEffect, useState } from "react";

const Basket = () => {
  const [basket, setBasket] = useState([]);
  function getOrderGame() {
    let orders = JSON.parse(localStorage.getItem("order")) || [];
    setBasket(orders);
  }

  useEffect(() => {
    getOrderGame();
  }, []);
import { useMainContext } from "../../context/MainContext";
import { useFetcher, useParams } from "react-router-dom";

const Basket = () => {
  const { gamer, getOrderData } = useMainContext();

  return (
    <div>
      <basket>
        <div className="container">
          <div className="basket">
            {basket.map((el) => (
              <div className="basketBox">
            <h1>basket</h1>
            {gamer.map((el) => (
              <div>
                <img src={el.image} alt="" />
                <div className="basketBlock">
                  <h1>{el.textName}</h1>
                  <p>{el.price}$</p>
                  <button className="btnDel">delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </basket>
    </div>
  );
};

export default Basket;
