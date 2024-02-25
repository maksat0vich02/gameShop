import React, { createContext, useContext, useEffect, useState } from "react";

const useProduct = createContext();
export const useMainContext = () => useContext(useProduct);
let darkMode = JSON.parse(localStorage.getItem("dark"));

const MainContext = ({ children }) => {
  const [DarkMode, setDarkmode] = useState(darkMode || false);

  function localDark() {
    localStorage.setItem("dark", JSON.stringify(DarkMode));
  }

  const values = {
    localDark,
    setDarkmode,
    DarkMode,
  };

  useEffect(() => {
    localDark();
  }, [DarkMode]);
  return <useProduct.Provider value={values}>{children}</useProduct.Provider>;
};

export default MainContext;
