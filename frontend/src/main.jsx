import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Hub from "./components/Hub";
import NavBar from "./components/NavBar";
import Battle from "./components/Battle";
import Footer from "./components/Footer";
import MenuPlayer from "./components/MenuPlayer";
import BattleWild from "./components/BattleWild";
import PokeCenter from "./components/PokeCenter";
import Pokedex from "./components/Pokedex";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/Hub",
    element: (
      <>
        <NavBar />
        <Hub />
        <MenuPlayer />
        <Footer />
      </>
    ),
  },
  {
    path: "/Battle",
    element: (
      <>
        <NavBar />
        <MenuPlayer />
        <Battle />
        <Footer />
      </>
    ),
  },
  {
    path: "/BattleWild",
    element: (
      <>
        <NavBar />
        <MenuPlayer />
        <BattleWild />
        <Footer />
      </>
    ),
  },
  {
    path: "/PokeCenter",

    element: (
      <>
        <NavBar />
        <MenuPlayer />
        <PokeCenter />
        <Footer />
      </>
    ),
  },
  {
    path: "/Pokedex",

    element: (
      <>
        <NavBar />
        <MenuPlayer />
        <Pokedex />
        <Footer />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
