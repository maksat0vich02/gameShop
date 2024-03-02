import React, { useState } from "react";
import { useMainContext } from "../../context/MainContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { getInputProduct } = useMainContext();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    image: "",
    textName: "",
    price: "",
    comment: "",
    avtor: "",
    GENREE: "",
    category: "",
    count: 0,
  });
  const [boot, setBoot] = useState({ sport: "" });

  function lableInput(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <admin>
        <div className="container">
          <div className="admin">
            <div className="admin-blocks">
              <input
                onChange={lableInput}
                class="input"
                placeholder="imgURL"
                name="image"
              />
              <input
                onChange={lableInput}
                class="input"
                placeholder="textName"
                name="textName"
              />
              <input
                onChange={lableInput}
                class="input"
                placeholder="praice"
                name="price"
              />
              <input
                onChange={lableInput}
                class="input"
                placeholder="comment"
                name="comment"
              />
              <input
                onChange={lableInput}
                class="input"
                placeholder="avtor"
                name="avtor"
              />
              <form action="local">
                <select onChange={lableInput} name="category" id="">
                  <option value=".">Категория</option>
                  <option value={lableInput}>приключение</option>
                  <option value={lableInput}>спорт</option>
                  <option value={lableInput}>ЭКШН</option>
                  <option value={lableInput}>Приключения</option>
                </select>
                <select onChange={lableInput} name="GENREE" id="">
                  <option value="">Жанры</option>
                  <option value={lableInput}>Plastation</option>
                  <option value={lableInput}>Компьютерные Игры</option>
                  <option value={lableInput}>Популярные Игры</option>
                </select>
              </form>
              <button
                onClick={() => {
                  getInputProduct(values);
                  navigate("/all-games");
                }}
                class="button"
              >
                <svg class="svgIcon" viewBox="0 0 384 512">
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </admin>
    </div>
  );
};

export default Admin;
