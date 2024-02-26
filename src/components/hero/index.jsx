import React, { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";
import axios from "axios";

const Hero = () => {
  const { DarkMode } = useMainContext();
  const [color, setColor] = useState([]);

  async function getBackdrop() {
    await axios(`http://localhost:3000/bakdrop_path`).then((res) => {
      res.data.map((el) => {
        setColor((prev) => [...prev, el]);
      });
    });
  }
  console.log(color);

  useEffect(() => {
    getBackdrop();
  }, []);
  let image = color[Math.floor(Math.random() * color.length)];

  return (
    <div>
      <div
        style={{
          background: `url(${image && image.img}) no-repeat center/cover`,
        }}
        id="hero"
      >
        <div className="container">
          <div className="hero">
            <div className="hero-box">
              <input className="input" type="text" placeholder="text" />
              <button> Button</button>
            </div>
          </div>
        </div>
      </div>

      <home>
        <div className="container">
          <div className="home">
            <div className="home-left">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/610/636/990/ezio-fantasy-assassins-creed-game-wallpaper-preview.jpg"
                alt=""
              />
            </div>
            <div className="home-right">
              <h1>
                Когда я был молод у меня была свобода, но я не видел ее. <br />{" "}
                У меня было время, но я не знал его. У меня была любовь, <br />
                но я не чувствовал ее. Похоже, что я не могу оставить свое
                прошлое <br />
                позади. И я знаю, что в любой момент некто может прийти за мной
                или моей семьей. <br /> Я знал, что у меня нет достаточно
                времени чтобы сделать все. Теперь я боюсь, <br /> что у меня нет
                времени сделать хоть что-то.
              </h1>
              <div className="home-display">
                <div className="h5-home">
                  <h5>(C)Assassin</h5>
                </div>
                <div className="home-btn">
                  <button class="btn">Купить игру</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </home>
    </div>
  );
};

export default Hero;
