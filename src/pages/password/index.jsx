import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// let counter = JSON.parse(localStorage.getItem("counts"));

const Password = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("games.ru");
  const [passwordName, setPasswordName] = useState("alim5010");
  const [count, setCount] = useState(3);
  const [times, setTimes] = useState(15);
  const navigate = useNavigate();

  //   function localCount() {
  //     localStorage.setItem("counts", JSON.stringify(count));
  //   }
  //   useEffect(() => {
  //     localCount();
  //   }, [count]);
  function time() {
    setTimeout(() => {
      if (times > 0) {
        setTimes(times - 1);
      } else if (times == 0) {
        setTimes(15);
      }
    }, 1000);
  }
  console.log(times);
  useEffect(() => {
    if (count == 0) {
      time();
    }
  });

  return (
    <div>
      <password>
        {/* <h1
          className="h1"
          style={{
            display: count ? "none" : "block",
            position: "absolute",
          }}
        >{` попыток: ${count} из 3`}</h1> */}
        <h1
          className="time"
          style={{
            display: count ? "none" : "block",
            color: "red",
          }}
        >
          вы можете повторить через: {times}s
        </h1>

        <div className="container">
          <div
            style={{
              filter: count ? "" : "blur(3px)",
            }}
            className="password"
          >
            <input
              style={{
                display: count ? "block" : "none",
              }}
              className="input"
              onChange={(e) => setName(e.target.value)}
              placeholder="Username"
              class="input"
              name="text"
              type="text"
            />
            <div
              style={{
                display: count ? "none" : "block",
              }}
              onChange={(e) => setName(e.target.value)}
              placeholder="Username"
              class="input input-2"
              name="text"
              type="text"
            ></div>
            <div
              style={{
                display: count ? "none" : "block",
              }}
              onChange={(e) => setName(e.target.value)}
              placeholder="Username"
              class="input input-2"
              name="text"
              type="text"
            ></div>
            <input
              style={{
                display: count ? "block" : "none",
              }}
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              class="input"
              name="text"
              type="password"
            />

            <button
              onClick={() => {
                {
                  if (name == userName && password == passwordName) {
                    return navigate("/admin");
                  } else if (name == "" && password == "") {
                    return alert("напишите имя и пароль !!!");
                  } else if (name !== userName || password !== passwordName) {
                    if (count > 0) {
                      setCount(count - 1);
                    } else if (count == 0) {
                      time();
                    } else {
                      setCount(count);
                    }
                  }
                }
              }}
            >
              click
            </button>
          </div>
        </div>
      </password>
    </div>
  );
};

export default Password;
