import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import MovieAdd from "./pages/MovieAdd";
import MovieList from "./pages/MovieList";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Menu />}></Route>
      <Route path="/MovieAdd" element={<MovieAdd />}></Route>
      <Route path="/MovieList" element={<MovieList />}></Route>
    </Routes>
  </BrowserRouter>
);
