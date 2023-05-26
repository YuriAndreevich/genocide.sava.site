import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import fon from "../../assets/video/mainvideo.mp4";
import AnimatedNumber from "../AnimatedNumber";
import sm from "../../assets/svg/wsoundpause.svg";
import sp from "../../assets/svg/wsoundplay.svg";
import vm from "../../assets/svg/wvideopause.svg";
import vp from "../../assets/svg/wvideoplay.svg";
import { useTranslation } from "react-i18next";

import "./shyne.scss";

function index() {
  const vidRef = useRef(null);
  const { t } = useTranslation();

  const [play, setPlay] = useState(true);
  const [sound, setSound] = useState(false);
  const handleStartAudio = () => {
    setSound(!sound);
    if (sound == true) {
      vidRef.current.muted = false;
    } else if (sound == false) {
      {
        vidRef.current.muted = true;
      }
    }
  };
  const handleStartVideo = () => {
    setPlay(!play);
    if (play == true) {
      vidRef.current.play();
    } else if (play == false) {
      vidRef.current.pause();
    }
  };

  return (
    <div className="relative ">
      <video
        autoPlay={play}
        ref={vidRef}
        loop
        className="w-screen h-screen object-cover"
      >
        <source src={fon} type="video/mp4" />
      </video>

      <div className="absolute right-24 bottom-32">
        <div className="flex flex-row">
          {play ? (
            <img
              className=" relative h-16 w-16 z-40"
              src={vp}
              alt=""
              onClick={handleStartVideo}
            />
          ) : (
            <img
              className=" relative h-16 w-16 z-40"
              src={vm}
              alt=""
              onClick={handleStartVideo}
            />
          )}
          {sound ? (
            <img
              className=" relative h-16 w-16 z-40"
              src={sm}
              alt=""
              onClick={handleStartAudio}
            />
          ) : (
            <img
              className=" relative h-16 w-16 z-40 ml-2"
              src={sp}
              alt=""
              onClick={handleStartAudio}
            />
          )}
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-black to-0 w-screen top-3/4">
        <div className="shyne text-6xl sm:text-9xl text-center mt-20">
          <Link to="/page1" className="hover:text-green-600 font-extrabold ">
            «П
          </Link>
          <Link to="/page2" className="hover:text-green-600 font-extrabold">
            А
          </Link>
          <Link to="/page3" className="hover:text-green-600 font-extrabold">
            Т
          </Link>
          <Link to="/page4" className="hover:text-green-600 font-extrabold">
            Р
          </Link>
          <Link to="/page5" className="hover:text-green-600 font-extrabold">
            {t("И")}
          </Link>
          <Link to="/page6" className="hover:text-green-600 font-extrabold">
            {t("О")}
          </Link>
          <Link to="/page7" className="hover:text-green-600 font-extrabold">
            Т:
          </Link>
        </div>
        <div className="  text-5xl mt-10 text-center mb-10">
          <Link to="/newGeneration">{t("мы - новое поколение!»")}</Link>
        </div>
        <div className="flex justify-center gap-10 p-10 overflow-x-auto overflow-y-hidden">
          <AnimatedNumber text="Участники мероприятий" number={4695} />
          <AnimatedNumber text="Наши достижения" number={84} />
          <AnimatedNumber
            text="Краеведческо-патриотические экспедиции"
            number={26}
          />
          <AnimatedNumber
            text="Благоустроенные братские могилы и памятники"
            number={18}
          />
          <AnimatedNumber text="Молодежные проекты" number={19} />
        </div>
      </div>
    </div>
  );
}

export default index;
