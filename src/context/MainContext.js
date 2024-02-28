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

  async function getOrderData(id) {
    let { data } = await axios(`${API}/${id}`);
    setGamer(data);
  }
  console.log(gamer);

  const values = {
    localDark,
    setDarkmode,
    DarkMode,
    getInputProduct,
    getGamesData,
    product,
    getOrderData,
    gamer,
  };

  useEffect(() => {
    localDark();
  }, [DarkMode]);
  return <useProduct.Provider value={values}>{children}</useProduct.Provider>;
};

export default MainContext;
