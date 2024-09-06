import React, { useEffect } from "react";
import DestiHeader from "../components/DestiHeader";
import Weather from "../components/Weather";
import Footer from "../pages/Footer";
import Photos from "../components/Photos";
import { useParams } from "react-router-dom";
import { dest } from "../info/placeAbout";
import { BackNav } from "../components/BackNav";
import PostSection from "../components/PostSection";

const DestinationPage = () => {
  const { src } = useParams();

  const data = dest.find((e) => e.src === src);
  const { about, place, img, img1, img2, img3, province } = data;

  return (
    <section>
      <BackNav />
      <DestiHeader place={place} src={img} />
      <div className="mt-8 px-4 flex flex-col-reverse mx-auto md:max-w-[1300px] md:justify-center items-center md:items-start  md:flex-row">
        <div>
          <h2 className="text-4xl font-bold text-cyan-600">About</h2>
          <p className="my-8">{about}</p>
        </div>
        <article className="w-full">
          <Weather place={place} province={province} />
        </article>
      </div>
      <Photos img1={img1} img2={img2} img3={img3} place={place} />
      <PostSection />
      <Footer />
    </section>
  );
};

export default DestinationPage;
