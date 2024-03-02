import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { RiAwardLine } from "react-icons/ri";

const useProduct = createContext();
export const useMainContext = () => useContext(useProduct);
let darkMode = JSON.parse(localStorage.getItem("dark"));

const MainContext = ({ children }) => {
  const API = "http://localhost:3000/data";
  const [DarkMode, setDarkmode] = useState(darkMode || false);
  const [product, setProduct] = useState([]);
  const [gamer, setGamer] = useState([]);
  const [count, setCount] = useState(1);
  const [counter, setCounter] = useState(false);
  const [shet, setShet] = useState(0);
  const [breaks, setBreaks] = useState(false);

  function localDark() {
    localStorage.setItem("dark", JSON.stringify(DarkMode));
  }

  async function getInputProduct(product) {
    await axios.post(API, product);
  }

  async function getGamesData() {
    let { data } = await axios(API);
    setProduct(data);
  }

  async function getOrderData(product) {
    let { data } = await axios(`${API}/${product}`);
    setGamer(data);
  }

  async function DeleteData(id) {
    await axios.delete(`${API}/${id}`);
    getGamesData();
  }

  console.log();

  const values = {
    shet,
    setShet,
    localDark,
    setDarkmode,
    DarkMode,
    getInputProduct,
    getGamesData,
    product,
    getOrderData,
    gamer,
    DeleteData,
    setCount,
    count,
    setCounter,
    counter,
    setBreaks,
    breaks,
  };

  useEffect(() => {
    localDark();
  }, [DarkMode]);
  return <useProduct.Provider value={values}>{children}</useProduct.Provider>;
};

export default MainContext;
