import React, { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";

const Search = ({ gameSearch }) => {
  const [play, setPlay] = useState([]);
  const { product, getGamesData } = useMainContext();

  let Searching = product.filter((el) => {
    return el.textName.toLowerCase().includes(gameSearch.toLowerCase());
  });

  useEffect(() => {
    getGamesData();
  }, [gameSearch]);

  return (
    <div>
      <div id="seacrh">
        <div className="container">
          <div className="search">
            {Searching.map((el) => {
              return (
                <div className="gamesAll">
                  <img src={el.image} alt="" />
                  <h1>{el.textName}</h1>
                  <p>{el.price}$</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;