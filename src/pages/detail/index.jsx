import React, { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";
import { useNavigate, useParams } from "react-router-dom";
import { Link, json, useNavigate, useParams } from "react-router-dom";

let counter = JSON.parse(localStorage.getItem("counts"));
const Detail = () => {
  const { getGamesData, product, getOrderData } = useMainContext();
  const [readNow, setReadNow] = useState(false);
  const [count, setCount] = useState(counter || 1);
  const navigate = useNavigate();

  const { id } = useParams();

  let arr = product.filter((el) => {
    return id == el.id;
  });

  function getOrderData() {
    let orders = JSON.parse(localStorage.getItem("order")) || [];
    orders.push(arr[0]);
    localStorage.setItem("order", JSON.stringify(orders));
  }

  function getCount() {
    localStorage.setItem("counts", JSON.stringify(count));
  }

  useEffect(() => {
    getGamesData(id);
    getCount();
  }, [count]);

  return (
    <div>
      <div className="detail">
        <div className="container">
          <div className="detail">
            {arr.map((el) => (
              <div>
                <div className="detail-div">
                  <img src={el.image} alt="" />
                  <div className="detail-text">
                    <h1>{el.textName}</h1>
                    <h4>{el.price * count}$</h4>
                    <p>{readNow ? el.comment : el.comment.slice(0, 400)}</p>

                    <button
                      style={{
                        display: readNow ? "none" : "block",
                      }}
                      className="btn-click"
                      onClick={() => {
                        setReadNow(!readNow);
                      }}
                    >
                      Читать далее
                    </button>
                    <button
                      className="btn-click"
                      style={{
                        display: readNow ? "block" : "none",
                      }}
                      onClick={() => {
                        setReadNow(!readNow);
                      }}
                    >
                      закрыть
                    </button>

                    <div className="btn-basket">
                      <button
                        onClick={() => {
                          if (count > 1) {
                            setCount(count - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <p>{count}</p>
                      <button
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        +
                      </button>

                      <button
                        onClick={() => {
                          getOrderData(id);
                          navigate("/basket");
                        }}
                      >
                        Basket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

// function getOrderData() {
//   let orders = JSON.parse(localStorage.getItem("order")) || [];
//   let res = orders.some((el) => {
//     let str = order.some((il) => {
//       return el.id == il.id;
//     });
//     return str;
//   });
//   if (res == false) {
//     orders.push(order[0]);
//     localStorage.setItem("order", JSON.stringify(orders));
//   } else {
//     alert("этот продукт уже добавлен !!!");
//   }
//   getData();
// }
