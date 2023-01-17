import React from "react";
import Navbar from "../components/Navbar";
import Destinations from "./Destinations";
import Food from "./Food";
import Footer from "./Footer";
import Hero from "./Hero";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <Hero />
      <Destinations />
      <Food />
      <Footer />
    </motion.div>
  );
};

export default HomePage;
