import React from "react";
import Popular from "../pages/popular";
import Playstatiion from "../pages/plastation";
import Computer from "../pages/computergames";
import { Route, Routes } from "react-router-dom";
import Hero from "../components/hero";

const PUBLIC = [
  { path: "/popular", element: <Popular />, key: 1 },
  { path: "/plastation", element: <Playstatiion />, key: 2 },
  { path: "/computer", element: <Computer />, key: 3 },
  { path: "/", element: <Hero />, key: 4 },
];
const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
