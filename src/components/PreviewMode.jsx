import React, { useEffect, useState } from "react";
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
import { PiArrowUpLeftThin } from "react-icons/pi";

const PreviewMode = (props) => {
  const [img, setImg] = useState(null);
  const [nextImg, setNextImg] = useState(null);
  const images = [
    Gabriel,
    Gabriel2,
    Wheel,
    Cows,
    Zebra,
    Guitar,
    Burro,
    Basket,
    Farturas,
    Skate,
    Chair,
    Pescador,
    GuitarFade,
    Tunel,
    Porto,
    OldCars,
    Eletro,
    Stairs,
    ManSuit,
    Gas,
    Gabriel3,
    SkateFade,
    Stadium,
    Mac,
    Beach1,
    Train,
    Boat,
    Boat2,
    Road,
    Sleep,
    Abandon,
    Beach2,
  ];
  useEffect(() => {
    if (props.img) {
      setImg(props.img);
      images.forEach((image, index) => {
        if (image === props.img) {
          if (index + 1 < images.length) {
            setNextImg(images[index + 1]);
          } else {
            setNextImg(images[0]);
          }
        }
      });
    } else {
      setImg(images[0]);
      setNextImg(images[1]);
    }
  }, [props]);

  useEffect(() => {
    images.forEach((image, index) => {
      if (image === img) {
        if (index + 1 < images.length) {
          setNextImg(images[index + 1]);
        } else {
          setNextImg(images[0]);
        }
      }
    });
  }, [img]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !document.getElementById("photo").contains(event.target) &&
        !document.getElementById("next_photo").contains(event.target)
      ) {
        props.setImg(null);
        props.hidePreviewMode();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    img && (
      <div className="w-screen h-screen fixed z-[100] left-0 top-0 bg-black/80">
        <button className="text-8xl absolute top-0 left-0 text-red">
            <PiArrowUpLeftThin onClick={() => props.hidePreviewMode()} />
        </button>
        <div className="w-full h-full flex lg:flex-row flex-col justify-between items-center lg:ml-5 pr-0">
          <div className="lg:w-[80%] w-[98%] h-[85%] flex flex-col justify-center items-center">
            <img
              src={img}
              alt="Preview"
              id="photo"
              className="object-center max-w-[100%] max-h-[100%] fade-in transition-all duration-500 easy-in-out"
            />
          </div>

          <div className="lg:ml-5 lg:w-[15%] h-[15%] lg:h-screen w-screen relative">
            <h1 className="text-2xl text-white font-light absolute top-1 left-2 z-[100]">
              next
            </h1>
            <img
              src={nextImg}
              alt="Preview"
              id="next_photo"
              className="object-cover object-center opacity-70 hover:opacity-90 transition-all duration-300 w-full h-full hover:cursor-pointer fade-in transition-all duration-500 easy-in-out"
              onClick={() => setImg(nextImg)}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default PreviewMode;
