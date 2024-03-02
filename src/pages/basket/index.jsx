import React, { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";

const Basket = () => {
  const { DeleteData, count, setCount, counter } = useMainContext();
  const [basket, setBasket] = useState([]);

  function deleteOrder(id) {
    let orders = JSON.parse(localStorage.getItem("order")) || [];
    orders = orders.filter((el) => el.id !== id);
    localStorage.setItem("order", JSON.stringify(orders));
    orderGame();
  }

  function orderGame() {
    let orders = JSON.parse(localStorage.getItem("order")) || [];
    setBasket(orders);
  }

  useEffect(() => {
    orderGame();
  }, []);

  return (
    <div>
      <basket>
        <div className="container">
          <div className="basket">
            {basket.map((el) => (
              <div className="basket-box">
                <img src={el.image} alt="" />
                <div className="basketBlock">
                  <h1>{el.textName}</h1>
                  <h3>{el.avtor}</h3>
                  <p>{el.price * count}$</p>

                  <div className="btn-text">
                    <button
                      onClick={() => {
                        deleteOrder(el.id);
                        setCount(count == false);
                      }}
                      className="btnDel"
                    >
                      Remove-games
                    </button>
                  </div>
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
