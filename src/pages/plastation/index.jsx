import React, { useEffect } from "react";
import { useMainContext } from "../../context/MainContext";
import video from 

const Playstatiion = () => {
  const { getGamesData, product } = useMainContext();

  let newSort = product.filter((el) => {
    return el.GENREE == "Plastation";
  });

  useEffect(() => {
    getGamesData();
  }, []);
  return (
    <div>
      <plastation>
        <div className="container">
          <div className="plastation">
            {newSort.map((el) => (
              <div>
                <div className="ps-div">
                  <img src={el.image} alt="" />
                  <h1>{el.textName}</h1>
                  <p>{el.price}$</p>
                </div>
              </div>
            ))}

            <video
              src="https://youtu.be/-GvDTvLRe3k?si=aMV9peeIsBkxRKzd"
              muted
              autoPlay
              loop
            ></video>
          </div>
        </div>
      </plastation>
    </div>
  );
};

export default Playstatiion;
