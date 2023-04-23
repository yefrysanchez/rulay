import React, { useEffect } from "react";
import DestiHeader from "../components/DestiHeader";
import Weather from "../components/Weather";
import Footer from "../pages/Footer";
import Photos from "../components/Photos";
import { useParams } from "react-router-dom";
import { dest } from "../info/placeAbout";
import { BackNav } from "../components/BackNav";
import { motion } from "framer-motion";
import PostSection from "../components/PostSection";

const DestinationPage = () => {
  const { src } = useParams();

  const data = dest.find((e) => e.src === src);
  const { about, place, img, img1, img2, img3 } = data;

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
      <BackNav />
      <DestiHeader place={place} src={img} />
      <section className="mt-8 flex flex-col-reverse mx-auto md:max-w-[1300px] md:justify-center items-center md:items-start  md:flex-row">
        <section className="px-12 xl:px-0">
          <h2 className="text-4xl font-bold text-cyan-600">About</h2>
          <p className="my-8">{about}</p>
          <Photos img1={img1} img2={img2} img3={img3} place={place} />
        </section>
        <article className="w-full">
          <Weather place={place} />
        </article>
      </section>
      <PostSection />
      
      <Footer />
    </motion.div>
  );
};

export default DestinationPage;
