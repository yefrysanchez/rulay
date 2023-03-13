import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DestinationPage from "../pages/DestinationPage";
import HomePage from "../pages/HomePage";
import { AnimatePresence } from "framer-motion";

export const RouterPage = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence>
      <Routes location={location} key={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:src" element={<DestinationPage />} />
      </Routes>
    </AnimatePresence>
  );
};
