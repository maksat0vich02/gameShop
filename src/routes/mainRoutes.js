import React from "react";
import Popular from "../pages/popular";
import Playstatiion from "../pages/plastation";
import Computer from "../pages/computergames";
import { Route, Routes } from "react-router-dom";
import Hero from "../components/hero";
import Admin from "../pages/admin";
import Games from "../pages/allgames/games";
import Password from "../pages/password";
import Detail from "../pages/detail";
import Basket from "../pages/basket";

const PUBLIC = [
  { path: "/popular", element: <Popular />, key: 1 },
  { path: "/plastation", element: <Playstatiion />, key: 2 },
  { path: "/computer", element: <Computer />, key: 3 },
  { path: "/", element: <Hero />, key: 4 },
  { path: "/all-games", element: <Games />, key: 4 },
  { path: "/all-games/:id", element: <Detail />, key: 5 },
  { path: "/basket", element: <Basket />, key: 6 },
];

const PRIVATE = [
  { path: "/password", element: <Password />, key: 1 },
  { path: "/admin", element: <Admin />, key: 2 },
];

const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
      {PRIVATE.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
