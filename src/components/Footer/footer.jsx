import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer-text">
              <img
                src="https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg"
                alt=""
                width={150}
              />
              <div className="footer-inputs">
                <input type="text" placeholder="search ..." />
                <button>seacrh</button>
              </div>
            </div>
            <div className="footer-a">
              <h5>game center</h5>
              <a href="/">home</a>
              <a href="#">about</a>
              <a href="/all-games">games</a>
              <a href="#">service</a>
              <a href="#">contact</a>
            </div>
            <div className="footer-a">
              <h5>center</h5>

              <a href="#">Plastation</a>
              <a href="#">Windows</a>
              <a href="#">XBOX</a>
              <a href="#">Saga</a>
            </div>
            <div className="footer-a">
              <h5>CSS center</h5>

              <a href="#">Computer</a>
              <a href="#">Web</a>
              <a href="#">Disaign</a>
              <a href="#">Footer</a>
              <a href="#">contact</a>
            </div>
            <div className="footer-a">
              <h5>Help</h5>

              <a href="/">home</a>
              <a href="#">abouot</a>
              <a href="/all-games">games</a>
              <a href="#">service</a>
              <a href="#">contact</a>
            </div>
          </div>
        </div>
        <section className="footer-section">
          <div className="footer-two">
            <h1>@2024 Galaxy , all-rights Sony</h1>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
