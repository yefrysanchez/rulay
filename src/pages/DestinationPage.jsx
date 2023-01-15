import React from "react";
import Article from "../components/Article";
import DestiHeader from "../components/DestiHeader";
import Navbar from "../components/Navbar";
import Weather from "../components/Weather";
import DestiAbout from "./DestiAbout";
import Footer from "../pages/Footer";
import Photos from "../components/Photos";

const DestinationPage = () => {
  return (
    <div className="">
      <Navbar />
      <DestiHeader />
      <section className="mt-8 flex mx-auto md:max-w-[1300px] md:justify-center items-center md:items-start flex-col md:flex-row">
        <article >
          <DestiAbout />
          <div className="flex gap-2 flex-wrap justify-center py-8">
            <Article />
            <Article />
            <Article />
          </div>
        </article>
        <article>
          <Weather />
          <Photos />
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationPage;
