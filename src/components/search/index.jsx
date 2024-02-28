import React, { useEffect, useState } from "react";
import { Data } from "../../API";
import { useMainContext } from "../../context/MainContext";

const Search = ({ gameSearch }) => {
  const [play, setPlay] = useState([]);
  const { product, getGamesData } = useMainContext();

  function getSearch() {
    setPlay(product);
  }

  let arr = play.filter((el) => {
    return el.textName.toLowerCase() == gameSearch;
  });

  useEffect(() => {
    getSearch();
  }, [arr]);

  return (
    <div>
      <div className="seacrh">
        <div className="container">
          <div className="search">
            {arr.map((el) => (
              <div>
                <img src={el.image} alt="" />
                <h1>{el.textName}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
