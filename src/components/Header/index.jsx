import React from "react";
import { NavLink } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { useMainContext } from "../../context/MainContext";

const Header = () => {
  const { setDarkmode, DarkMode } = useMainContext();
  console.log(DarkMode);

  return (
    <body
      style={{
        background: DarkMode ? "black" : "white",
      }}
    >
      <header>
        <div className="container">
          <div className="header">
            <img
              src="https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg"
              alt=""
              width={100}
            />
            <nav>
              <NavLink>Game Popular</NavLink>
              <NavLink>Playstatiion Games</NavLink>
              <NavLink>Computer Games</NavLink>
            </nav>
            <div className="inputBox">
              <div className="inputBoxs">
                <input
                  type="text"
                  autoComplete="off"
                  name="text"
                  className="input"
                  placeholder="Username"
                />
                <button>
                  <span> SEARCH</span>
                </button>
              </div>
              <div className="iconAdmin">
                <RiAdminLine />
              </div>
              <label className="switch">
                <input
                  onClick={() => {
                    setDarkmode(!DarkMode);
                  }}
                  type="checkbox"
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </header>
    </body>
  );
};

export default Header;
