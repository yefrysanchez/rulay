import React from "react";

const DestiCard = () => {
  const dest = [
    {
      place: "Zona Colonial",
      province: "Santo Domingo",
      src: "zonacolonial",
    },
    {
      place: "Bahia de las Aguilas",
      province: "Pedernales",
      src: "pedernales",
    },
    {
      place: "Santa Bárbara de Samaná",
      province: "Samaná",
      src: "samana",
    },
    {
      place: "Punta Cana",
      province: "Santo Domingo",
      src: "puntacana",
    },
  ];

  const destinations = dest.map((e) => {
    return (
      <div key={e.src} className="relative w-full h-[300px] lg:h-[450px] rounded-lg overflow-hidden mb-4">
        <div className=" absolute w-full h-full bg-gradient-to-b from-transparent bg-black/40 overflow-hidden"></div>
        <img
          className="h-full w-full object-cover"
          src={`../../src/assets/dest/${e.src}.jpg`}
          alt=""
        />
        <h2 className="absolute left-1/2 translate-x-[-50%] bottom-1/3 text-2xl text-white font-bold  z-50">
          {e.place}
        </h2>
        <p className="absolute left-1/2 translate-x-[-50%] bottom-1/4 text-sm text-white z-50">
          {e.province}
        </p>
      </div>
    );
  });

  return (
    <div className="md:grid grid-cols-2 lg:grid-cols-4 gap-2" >
      {destinations}
    </div>
  );
};

export default DestiCard;
