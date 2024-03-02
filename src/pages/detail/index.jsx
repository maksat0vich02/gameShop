import React, { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

const Detail = () => {
    getGamesData,
    product,
    setCount,
    count,
    setCounter,
    counter,
    shet,
    setShet,
    setBreaks,
    breaks,
  } = useMainContext();
  const { getGamesData, product, setCount, count, setCounter, counter } =
    useMainContext();
  const [readNow, setReadNow] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  let arr = product.filter((el) => {
    return id == el.id;
  });

  function getOrderData() {
    let orders = JSON.parse(localStorage.getItem("order")) || [];
    let res = orders.some((el) => {
      let str = arr.some((il) => {
        return el.id == il.id;
      });
      return str;
    });
    if (res == false) {
      orders.push(arr[0]);
      localStorage.setItem("order", JSON.stringify(orders));
    } else {
      alert("Этот продукт уже добавлен!!!");
    }
  }
  console.log(counter);
  useEffect(() => {
    getGamesData(id);
  }, []);

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
                    <h5>
                      {" "}
                      <AiOutlineCheck className="detail-icons" /> в наличии
                    </h5>

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
                      <p>{el.count + count}</p>
                      <button
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        +
                      </button>

                      <button
                        onClick={() => {
                          if (getOrderData(id) > 1) {
                            setCounter(true);
                          }
                          navigate("/basket");
                          setCounter(true);
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
