import React from "react";
import Gabriel from "../assets/img/gabriel.jpg";
import Gabriel2 from "../assets/img/gabriel2.jpg";
import Wheel from "../assets/img/wheel.jpeg";
import Cows from "../assets/img/cows.jpeg";
import Zebra from "../assets/img/zebra.jpg";
import Guitar from "../assets/img/guitar.png";
import Burro from "../assets/img/burro.jpeg";
import Basket from "../assets/img/basket.jpg";
import Farturas from "../assets/img/farturas.jpg";
import Skate from "../assets/img/skateleiria.jpg";
import Chair from "../assets/img/chair.jpg";
import Pescador from "../assets/img/pescador.jpg";
import GuitarFade from "../assets/img/guitarfade.jpg";
import Tunel from "../assets/img/tunel.jpg";
import Porto from "../assets/img/portonight.jpg";
import OldCars from "../assets/img/oldcars.jpg";
import Eletro from "../assets/img/eletro.jpg";
import Stairs from "../assets/img/stairs.jpg";
import ManSuit from "../assets/img/mansuit.jpg";
import Gas from "../assets/img/gas.jpg";
import Gabriel3 from "../assets/img/gabriel3.jpg";
import SkateFade from "../assets/img/skateFade.jpg";
import Stadium from "../assets/img/stadium.jpg";
import Mac from "../assets/img/mac.jpg";
import Beach1 from "../assets/img/beach1.jpg";
import Train from "../assets/img/train.jpg";
import Boat from "../assets/img/boat.jpg";
import Boat2 from "../assets/img/boat2.jpg";
import Road from "../assets/img/road.jpg";
import Sleep from "../assets/img/sleep.jpg";
import Abandon from "../assets/img/abandon.jpg";
import Beach2 from "../assets/img/beach2.jpg";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="grid xl:grid-cols-5 grid-cols-6 lg:p-20 lg:pt-0 md:p-10 md:pt-0 p-5 pt-0 gap-3 max-w-[1920px] m-auto transition-all duration-500 ease-in-out fade-in"
    >
      <div className="xl:col-span-2 md:col-span-3 col-span-6 md:h-[600px] h-[300px] grid-flow-col relative">
        <div className="transition-all duration-[600ms] ease-in-out w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 400
          </h1>
        </div>
        <img
          src={Wheel}
          alt="Street Photographer"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:col-span-3 col-span-6 h-[600px] grid grid-rows-2 gap-3 col-span-1">
        <div className="relative">
          <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
            <h1 className="text-white font-medium leading-none text-lg uppercase">
              OLYMPUS OM-1
            </h1>
            <h1 className="text-white font-light text-sm lowercase">
              kodak portra 400
            </h1>
          </div>
          <img
            src={Cows}
            alt="Street Photographer"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="relative group">
          <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
            <h1 className="text-black font-medium leading-none text-lg uppercase">
              OLYMPUS OM-1
            </h1>
            <h1 className="text-black font-light text-sm lowercase">
              kodak portra 800
            </h1>
          </div>
          <img
            src={Zebra}
            alt="Street Photographer"
            className="w-full object-cover h-full"
          />
        </div>
      </div>
      <div className="relative group md:col-span-4 col-span-6 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Guitar}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-1 md:col-span-2 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Gabriel2}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-1 md:col-span-2 col-span-3 lg:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Burro}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group md:col-span-4 col-span-6 lg:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Gabriel}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-1 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Basket}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-2 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Skate}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-2 col-span-6 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Farturas}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-5 col-span-6 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Chair}
          alt="Street Photographer"
          className="w-full object-cover h-full xl:object-center object-right"
        />
      </div>
      <div className="relative group xl:col-span-1 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Porto}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-2 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Pescador}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-2 md:col-span-3 col-span-6 lg:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Tunel}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-3 md:col-span-3 col-span-6 lg:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={GuitarFade}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group md:col-span-2 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={OldCars}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-2 md:col-span-4 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Eletro}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group md:col-span-2 col-span-6 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Stairs}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-1 md:col-span-2 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={ManSuit}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-1 md:col-span-2 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Gas}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-4 col-span-6 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Gabriel3}
          alt="Street Photographer"
          className="w-full object-cover h-full xl:object-center object-right"
        />
      </div>
      <div className="relative group md:col-span-2 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={SkateFade}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-3 md:col-span-4 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Stadium}
          alt="Street Photographer"
          className="w-full object-cover h-full md:object-center object-right"
        />
      </div>
      <div className="relative group xl:col-span-2 col-span-3 xl:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Mac}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-2 col-span-3 xl:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Beach1}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-1 md:col-span-2 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Train}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-2 md:col-span-4 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Boat}
          alt="Street Photographer"
          className="w-full object-cover h-full object-left"
        />
      </div>
      <div className="relative group md:col-span-3 col-span-6 xl:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Boat2}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group md:col-span-3 col-span-6 xl:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Road}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-2 cmd:ol-span-4 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Sleep}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-1 md:col-span-2 col-span-3 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-black font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-black font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Abandon}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
      <div className="relative group xl:col-span-4 col-span-6 md:h-[600px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start p-3">
          <h1 className="text-white font-medium leading-none text-lg uppercase">
            OLYMPUS OM-1
          </h1>
          <h1 className="text-white font-light text-sm lowercase">
            kodak portra 800
          </h1>
        </div>
        <img
          src={Beach2}
          alt="Street Photographer"
          className="w-full object-cover h-full object-center"
        />
      </div>
    </div>
  );
};

export default Gallery;
