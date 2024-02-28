import React, { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";
import { Link, useNavigate } from "react-router-dom";

const Games = () => {
  const { product, getGamesData } = useMainContext();
  const [btn, setBtn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getGamesData();
  }, []);

  return (
    <div>
      <categories>
        <div className="container">
          <div className="categories">
            <div className="card-games">
              <div className="janr-box"></div>
              <h1>Приключения && выживание</h1>
            </div>
            <div className="card-games">
              <div className="janr-boxTwo"></div>
              <h1>Спортивные Игры</h1>
            </div>
            <div className="card-games">
              <div className="janr-boxThree"></div>
              <h1>ЭКШН && Приключения</h1>
            </div>
          </div>
        </div>
      </categories>

      <section className="section-width"></section>

      <games>
        <div className="container">
          <div className="games">
            {product.map((el) => {
              return (
                <div>
                  <div className="games-all">
                    <div className="games-block">
                      <Link to={`/all-games/${el.id}`}>
                        {" "}
                        <img src={el.image} alt="" />
                      </Link>
                      <h1>{el.textName}</h1>
                      <h4>{el.price}$</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </games>
    </div>
  );
};

export default Games;
