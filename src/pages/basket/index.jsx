import React, { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";
import { useFetcher, useParams } from "react-router-dom";

const Basket = () => {
  const { gamer, getOrderData } = useMainContext();

  return (
    <div>
      <basket>
        <div className="container">
          <div className="basket">
            <h1>basket</h1>
            {gamer.map((el) => (
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
