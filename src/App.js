import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Layout/Base";
import Home from "./Page/Home";

const SplashScreen = () => {
  return (
    <div className="splash-screen d-flex justify-content-center align-items-center">
      <p className="logo">W.</p>
    </div>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen /> 
      ) : (
        <BrowserRouter>
          <Base>
            <Routes>
              <Route index path="/" element={<Home />} />
            </Routes>
          </Base>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
