import React from "react";
import Navbar from "../components/Navbar";
import Destinations from "./Destinations";
import Food from "./Food";
import Footer from "./Footer";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="smooth">
      <Navbar />
      <Hero />
      <Destinations />
      <Food />
      <Footer />
    </div>
  );
};

export default HomePage;
