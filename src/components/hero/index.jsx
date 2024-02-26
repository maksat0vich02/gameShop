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
        <div className="containe">
          <div className="hero">
            <div className="hero-box">
              <input
                className="input"
                type="text"
                placeholder="Game Search..."
              />
              <button> Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
