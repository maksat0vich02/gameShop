import React from "react";
import Popular from "../pages/popular";
import Playstatiion from "../pages/plastation";
import Computer from "../pages/computergames";
import { Route, Routes } from "react-router-dom";
import Hero from "../components/hero";
import Password from "../context/password";
import Admin from "../pages/admin";
import Games from "../pages/allgames/games";

const PUBLIC = [
  { path: "/popular", element: <Popular />, key: 1 },
  { path: "/plastation", element: <Playstatiion />, key: 2 },
  { path: "/computer", element: <Computer />, key: 3 },
  { path: "/", element: <Hero />, key: 4 },
  { path: "/all-games", element: <Games />, key: 4 },
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
