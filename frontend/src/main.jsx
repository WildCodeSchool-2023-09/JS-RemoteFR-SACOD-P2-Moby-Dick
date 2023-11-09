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
import Arene from "./components/Arene";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hub",
    element: (
      <>
        <NavBar />
        <main>
          <MenuPlayer />
          <Hub />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/battle",
    element: (
      <>
        <NavBar />
        <main>
          <MenuPlayer />
          <Battle />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/battlewild",
    element: (
      <>
        <NavBar />
        <main>
          <MenuPlayer />
          <BattleWild />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/arene",
    element: (
      <>
        <NavBar />
        <main>
          <MenuPlayer />
          <Arene />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/pokecenter",

    element: (
      <>
        <NavBar />
        <main>
          <MenuPlayer />
          <PokeCenter />
        </main>
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
