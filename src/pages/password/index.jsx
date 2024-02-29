import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("games.ru");
  const [passwordName, setPasswordName] = useState("alim5010");
  const [counts, setCounts] = useState(3);
  const [times, setTimes] = useState(15);
  const navigate = useNavigate();

  function callTimes() {
    if (counts == 1 && times >= 1) {
      setTimeout(() => {
        setTimes(times - 1);
      }, 1000);
    } else {
      setCounts(counts);
    }
  }

  useEffect(() => {
    callTimes();
  }, [times]);

  return (
    <div>
      <password>
        <h1
          style={{
            display: times == 0 ? "none" : "block",
          }}
        >
          Вы заблокированы на {times} sec
        </h1>

        <div className="container">
          <div className="password">
            <input
              className="input"
              onChange={(e) => setName(e.target.value)}
              placeholder="Username"
              class="input"
              name="text"
              type="text"
            />
            <input
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
                  } else if (name !== userName && password !== passwordName) {
                    if (counts > 1) {
                      setCounts(counts - 1);
                    }
                    alert("неверный логин и пароль!!!");
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
