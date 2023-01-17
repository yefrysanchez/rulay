import React from "react";
import { Link } from "react-router-dom";

const DestiCard = () => {
  const dest = [
    {
      place: "Zona Colonial",
      province: "Santo Domingo",
      src: "zonacolonial",
      img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSCpUuYznkC_bH31Qwmo0Rvj4O6Z-g5WUdgYkPU0FHIjx4sZpYuYB0Xc2j3MUdgoVyK"
    },
    {
      place: "Bahia de las Aguilas",
      province: "Pedernales",
      src: "pedernales",
      img: "https://tugranviaje.com/wp-content/uploads/2018/04/postal-desde-Bahia-de-Las-Aguilas.jpg"
    },
    {
      place: "Santa Bárbara de Samaná",
      province: "Samaná",
      src: "samana",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Santa_Barbara_de_Saman%C3%A1_%28Dominican_Republic%29.jpeg"
    },
    {
      place: "Punta Cana",
      province: "Santo Domingo",
      src: "puntacana",
      img: "https://i.travelapi.com/hotels/28000000/27580000/27573300/27573282/404fc3bf_z.jpg"
    },
  ];

  const destinations = dest.map((e) => {
    return (
      <Link to={e.src} key={e.src}>
        <div className="relative w-full h-[300px] lg:h-[450px] rounded-lg overflow-hidden mb-4">
          <div className=" absolute w-full h-full bg-gradient-to-b from-transparent bg-black/40 overflow-hidden"></div>
          <img
            className="h-full w-full object-cover "
            src={e.img}
            alt=""
          />
          <h2 className="absolute left-1/2 translate-x-[-50%] bottom-1/3 text-2xl text-white font-bold text-center  z-30">
            {e.place}
          </h2>
          <p className="absolute left-1/2 translate-x-[-50%] bottom-1/4 text-sm text-white z-30">
            {e.province}
          </p>
        </div>
      </Link>
    );
  });

  return (
    <div className="md:grid grid-cols-2 lg:grid-cols-4 gap-2">
      {destinations}
    </div>
  );
};

export default DestiCard;
