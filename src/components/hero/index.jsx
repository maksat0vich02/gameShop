import React from "react";
import { useMainContext } from "../../context/MainContext";

const Hero = () => {
  const { DarkMode } = useMainContext();
  return (
    <div>
      <div
        style={{
          background: DarkMode
            ? "URl(https://images.template.net/222293/free-abstract-gaming-background-edit-online.jpg) no-repeat center/cover"
            : "URL(https://www.ediiie.com/blog/assets/admin/uploads/Storytelling-in-video-games-development.jpg) no-repeat center/cover",
          transition: "1s",
        }}
        id="hero"
      >
        <div className="container">
          <div className="hero">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
