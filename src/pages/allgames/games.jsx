import React, { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";
import { Link } from "react-router-dom";

const Games = () => {
  const { product, getGamesData } = useMainContext();
  const [values, setValues] = useState("все игры");
  const [card, setCard] = useState(false);
  const [cardOne, setCardOne] = useState(true);
  const [cardTwo, setCardTwo] = useState(true);
  const [cardThree, setCardThree] = useState(true);

  let newArr = product.filter((el) => {
    return el.category == values;
  });

  useEffect(() => {
    getGamesData();
  }, [product]);
  //  bekasultan
  return (
    <div>
      <categories>
        <div className="container">
          <div className="categories">
            <div
              onClick={() => {
                setCard(true);
                setCardOne(false);
                setCardTwo(false);
                setCardThree(false);
              }}
              style={{
                height: card ? "400px" : "200px",
              }}
              className="card-games"
            >
              <div
                onClick={() => {
                  setValues("Приключения");
                }}
                className="janr-box"
              ></div>
              <h1
                style={{
                  transform: "none",
                }}
              >
                Приключения && выживание
              </h1>
            </div>
            <div
              style={{
                height: cardOne ? "400px" : "200px",
              }}
              className="card-games"
            >
              <div
                onClick={() => {
                  setCard(false);
                  setCardOne(true);
                  setCardTwo(false);
                  setCardThree(false);
                  setValues("спорт");
                }}
                className="janr-boxTwo"
              ></div>
              <h1>Спортивные Игры</h1>
            </div>
            <div
              style={{
                height: cardTwo ? "400px" : "200px",
              }}
              className="card-games"
            >
              <div
                onClick={() => {
                  setCard(false);
                  setCardOne(false);
                  setCardTwo(true);
                  setCardThree(false);
                  setValues("ЭКШН");
                }}
                className="janr-boxThree"
              ></div>
              <h1>ЭКШН && Приключения</h1>
            </div>
            <div
              style={{
                height: cardThree ? "400px" : "200px",
              }}
              className="card-games"
            >
              <div
                onClick={() => {
                  setCard(false);
                  setCardOne(false);
                  setCardTwo(false);
                  setCardThree(true);
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
