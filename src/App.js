import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Layout/Base";
import Home from "./Page/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
};

export default App;
