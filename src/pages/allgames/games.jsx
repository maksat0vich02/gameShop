import React, { useEffect } from "react";
import { useMainContext } from "../../context/MainContext";

const Games = () => {
  const { product, getGamesData } = useMainContext();

  useEffect(() => {
    getGamesData();
  }, []);

  return (
    <div>
      <games>
        <div className="container">
          <div className="games"></div>
        </div>
      </games>
    </div>
  );
};

export default Games;
