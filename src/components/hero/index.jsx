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
              <input
                className="input-hero"
                type="text"
                placeholder="Game Search..."
              />
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

      <section id="position">
        <div className="container">
          <div className="position">
            <center>
              <h1>Games-Person</h1>
            </center>
            <div className="position-div">
              <img
                className="img-1"
                src="https://i.pinimg.com/736x/dd/7e/e1/dd7ee1bdeeafa2b9355e93e86e74bb71.jpg"
                alt=""
                width={140}
              />
              <img
                className="img-2"
                src="https://u.kanobu.ru/editor/images/46/5723304c-199f-4547-8ff3-9ab8857586cb.webp"
                alt=""
                width={200}
              />
              <img
                className="img-3"
                src="https://assetsio.reedpopcdn.com/uncharted-nathan.png?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
                alt=""
                width={145}
              />
              <img
                className="img-4"
                src="https://image-cdn.essentiallysports.com/wp-content/uploads/WCCFmarvelsspiderman2-640x640.jpeg"
                alt=""
                width={150}
              />
              <img
                className="img-5"
                src="https://cdn.midjourney.com/9522634e-1036-45de-bb56-b4bef451d6fa/grid_0_640_N.webp"
                alt=""
                width={150}
              />
              <img
                className="img-6"
                src="https://w0.peakpx.com/wallpaper/719/660/HD-wallpaper-simon-ghost-riley-reboot-call-of-duty-ghost-warzone.jpg"
                alt=""
                width={140}
                height={150}
              />
              <img
                className="img-7"
                src="https://preview.redd.it/face-paint-s-vol-3-v0-l2108ertdig91.png?width=640&crop=smart&auto=webp&s=0c36c6eb4ac1d6f74ecbd728bb1222b22f2d99a9"
                alt=""
                width={140}
              />
              <div className="div-one"></div>
              <div className="div-two"></div>
              <div className="div-three"></div>
              <div className="div-for"></div>
              <div className="div-five"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
