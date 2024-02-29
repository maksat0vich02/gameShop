import React, { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";
import { Link, useNavigate } from "react-router-dom";

const Games = () => {
  const { product, getGamesData } = useMainContext();
  const [btn, setBtn] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] = useState("все игры");

  let newArr = product.filter((el) => {
    return el.category == values;
  });

  useEffect(() => {
    getGamesData();
  }, [product]);
  console.log(product);
  return (
    <div>
      <categories>
        <div className="container">
          <div className="categories">
            <div className="card-games">
              <div
                onClick={() => {
                  setValues("Приключения");
                }}
                className="janr-box"
              ></div>
              <h1>Приключения && выживание</h1>
            </div>
            <div className="card-games">
              <div
                onClick={() => {
                  setValues("спорт");
                }}
                className="janr-boxTwo"
              ></div>
              <h1>Спортивные Игры</h1>
            </div>
            <div className="card-games">
              <div
                onClick={() => {
                  setValues("ЭКШН");
                }}
                className="janr-boxThree"
              ></div>
              <h1>ЭКШН && Приключения</h1>
            </div>
            <div className="card-games">
              <div
                onClick={() => {
                  setValues("все игры");
                }}
                className="janr-boxfor"
              ></div>
              <h1>Все Игры</h1>
            </div>
          </div>
        </div>
      </categories>

      <section className="section-width"></section>

      <games>
        <div className="container">
          <div className="games">
            {values == "все игры"
              ? product.map((el) => (
                  <div>
                    <div className="games-all">
                      <div className="games-block">
                        <Link to={`/all-games/${el.id}`}>
                          <img src={el.image} alt="" />
                        </Link>
                        <h1>{el.textName}</h1>
                        <p>{el.price}$</p>
                      </div>
                    </div>
                  </div>
                ))
              : newArr.map((el) => (
                  <div>
                    <div className="games-all">
                      <div className="games-block">
                        <img src={el.image} alt="" />
                        <h1>{el.textName}</h1>
                        <p>{el.price}$</p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </games>
    </div>
  );
};

export default Games;
