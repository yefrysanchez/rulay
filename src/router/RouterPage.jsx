import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DestinationPage from "../pages/DestinationPage";
import HomePage from "../pages/HomePage";


export const RouterPage = () => {
  const location = useLocation();
  
  return (

      <Routes location={location} key={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:src" element={<DestinationPage />} />
      </Routes>

  );
};
