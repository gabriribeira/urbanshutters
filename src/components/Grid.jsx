import React from "react";
import useWindowSize from "../hooks/useWindowSize";
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
import Gabriel from "../assets/img/gabriel.jpg";
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

const Grid = ({setImg}) => {
  const { isMobile } = useWindowSize();
  return !isMobile ? (
    <div className="relative overflow-hidden md:gap-y-3 gap-y-1 flex flex-col transition-all duration-500 ease-in-out fade-in">
      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0 -ml-[10vw]">
          <img
            src={Gabriel2}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Gabriel2)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Wheel}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Wheel)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Cows}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Cows)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Zebra}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Zebra)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Guitar}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Guitar)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0 -ml-[20vw]">
          <img
            src={Burro}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Burro)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Basket}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Basket)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Farturas}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Farturas)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Skate}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Skate)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Chair}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Chair)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0 -ml-[5vw]">
          <img
            src={Pescador}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Pescador)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={GuitarFade}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(GuitarFade)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Tunel}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Tunel)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Porto}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Porto)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={OldCars}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(OldCars)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0 -ml-[10vw]">
          <img
            src={Gabriel}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Gabriel)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Eletro}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Eletro)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Stairs}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Stairs)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={ManSuit}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(ManSuit)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Gas}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Gas)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0 -ml-[20vw]">
          <img
            src={Gabriel3}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Gabriel3)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={SkateFade}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(SkateFade)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Stadium}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Stadium)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Mac}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Mac)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Beach1}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Beach1)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0 -ml-[5vw]">
          <img
            src={Train}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Train)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Boat}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Boat)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Boat2}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Boat2)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Road}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Road)}
          />
        </div>
        <div className="w-[25vw] h-[25vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Sleep}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Sleep)}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="relative overflow-hidden md:gap-y-3 gap-y-1 flex flex-col transition-all duration-500 ease-in-out fade-in">
      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0 -ml-[10vw]">
          <img
            src={Gabriel2}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Gabriel2)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Wheel}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Wheel)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Cows}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Cows)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0 -ml-[20vw]">
          <img
            src={Zebra}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Zebra)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Guitar}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Guitar)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Burro}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Burro)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Basket}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Basket)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Farturas}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Farturas)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Skate}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Skate)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Chair}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Chair)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0 -ml-[5vw]">
          <img
            src={Pescador}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Pescador)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={GuitarFade}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(GuitarFade)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Tunel}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Tunel)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Porto}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Porto)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={OldCars}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(OldCars)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0 -ml-[10vw]">
          <img
            src={Gabriel}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Gabriel)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Eletro}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Eletro)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Stairs}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Stairs)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0 -ml-[20vw]">
          <img
            src={ManSuit}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(ManSuit)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Gas}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Gas)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Gabriel3}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Gabriel3)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={SkateFade}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(SkateFade)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Stadium}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Stadium)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Mac}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Mac)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0 -ml-[5vw]">
          <img
            src={Beach1}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Beach1)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Train}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Train)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Boat}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Boat)}
          />
        </div>
      </div>

      <div className="flex items-center md:gap-3 gap-1 w-auto">
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Boat2}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Boat2)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Road}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Road)}
          />
        </div>
        <div className="w-[40vw] h-[40vw] relative flex items-center justify-center flex-shrink-0">
          <img
            src={Sleep}
            alt="Street Photographer"
            className="object-cover object-center h-full w-full absolute top-0 left-0"
            onClick={() => setImg(Sleep)}
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
