import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cover from "../assets/img/feira.jpg";
import Miguel from "../assets/img/miguel.jpeg";
import Gabriel from "../assets/img/gabriel.jpg";
import Paulo from "../assets/img/paulo.jpg";
import { Element } from "react-scroll";
import Gallery from "../components/Gallery";
import Grid from "../components/Grid";
import { CiInstagram } from "react-icons/ci";
import PreviewMode from "../components/PreviewMode";

const Home = () => {
  const [view, setView] = useState(true);
  const [img, setImg] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const setImgFunction = (img) => {
    setImg(img);
  };
  useEffect(() => {
    if (img) {
      setPreviewMode(true);
    }
    console.log(img);
  }, [img]);
  return (
    <div className="bg-white">
      <Navbar />
      <div id="home" className="flex w-full h-full justify-center items-center">
        <img
          src={Cover}
          alt="120mm Analog"
          className="h-screen w-full object-cover object-center"
        />
      </div>
      <div
        id="about"
        className="grid grid-cols-2 lg:p-20 md:p-10 p-5 items-center max-w-[1920px] m-auto"
      >
        <div className="lg:col-span-1 col-span-2 flex flex-col">
          <h1 className="font-bold text-4xl text-red uppercase mb-5">ABOUT</h1>
          <div className="font-light text-red text-xl">
            <p className="lowercase text-justify">
              a group of street analog photographers deeply influenced by the
              urban landscapes and streets of Portugal. immerse yourself in the
              timeless artistry captured by our photographers as they unveil the
              essence of our nation through the evocative medium of film.
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-2 flex md:flex-row flex-col items-center lg:gap-3 gap-5 lg:justify-end justify-center lg:mt-0 mt-10">
          <img
            src={Gabriel}
            alt="Street Photographer"
            className="xl:w-[150px] xl:h-[150px] lg:w-[120px] lg:h-[120px] w-[150px] h-[150px] object-cover object-bottom"
          />
          <img
            src={Miguel}
            alt="Street Photographer"
            className="xl:w-[150px] xl:h-[150px] lg:w-[120px] lg:h-[120px] w-[150px] h-[150px] object-cover"
          />
          <img
            src={Paulo}
            alt="Street Photographer"
            className="xl:w-[150px] xl:h-[150px] lg:w-[120px] lg:h-[120px] w-[150px] h-[150px] object-cover"
          />
        </div>
      </div>
      <div className="w-full flex justify-end pb-5 lg:pt-20 lg:px-20 md:pt-10 md:px-10 pt-5 px-5 max-w-[1920px] m-auto">
        <button onClick={() => setView(!view)} className="text-red underline">
          i'm feeling lucky
        </button>
      </div>
      {view ? (
        <Gallery setImg={setImgFunction} />
      ) : (
        <Grid setImg={setImgFunction} />
      )}
      <Element name="contacts">
        <div className="pb-10 px-20 flex lg:flex-row flex-col-reverse justify-between lg:items-end items-center">
          <p className="text-red uppercase text-lg col-span-1 text-center">
            © 2024 - URBAN SHUTTERS - ALL RIGHTS RESERVED
          </p>
          <div className="lg:col-span-1 col-span-2 flex flex-col text-center items-center lg:mb-0 mb-20">
            <div className="text-red text-lg lg:text-end text-center uppercase">
              <a
                href="https://www.instagram.com/urbanshutters.ph/"
                target="_blank"
                rel="noreferrer"
              >
                @urbanshutters
              </a>
              <p>info@urbanshutters.com</p>
            </div>
          </div>
        </div>
      </Element>
      <a
        href="https://www.instagram.com/urbanshutters.ph/"
        target="_blank"
        rel="noreferrer"
        className="text-4xl text-black fixed lg:bottom-2 lg:right-2 right-1 bottom-1"
      >
        <CiInstagram />
      </a>
      {previewMode && (
        <PreviewMode
          img={img}
          hidePreviewMode={() => setPreviewMode(false)}
          setImg={setImgFunction}
        />
      )}
    </div>
  );
};

export default Home;
