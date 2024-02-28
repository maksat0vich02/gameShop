import React, { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";
import { useParams } from "react-router-dom";

const Basket = () => {
  const [basket, setBasket] = useState([]);

  function getOrderGame() {
    let orders = JSON.parse(localStorage.getItem("order")) || [];
    setBasket(orders);
  }

  useEffect(() => {
    getOrderGame();
  }, []);

  return (
    <div>
      <basket>
        <div className="container">
          <div className="basket">
            {basket.map((el) => (
              <div>
                <img src={el.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </basket>
    </div>
  );
};

export default Basket;
