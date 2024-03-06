import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import fon from "../../assets/video/mainvideo.mp4";
import AnimatedNumber from "../AnimatedNumber";
import sm from "../../assets/svg/wsoundpause.svg";
import sp from "../../assets/svg/wsoundplay.svg";
import vm from "../../assets/svg/wvideopause.svg";
import vp from "../../assets/svg/wvideoplay.svg";
import { useTranslation } from "react-i18next";
import MasonryGallery from "./components/MasonryGallery";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
} from "@chakra-ui/react";
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
  const steps = [
    {
      title: "2018-2020",
      description:
        "Глубина и искренность этой темы никого не оставила равнодушным, она оказалась близка буквально всем, ведь своя малая родина есть у каждого. Это место, где ты родился и вырос. И даже если в силу обстоятельств с ним тебя разделяют сотни и тысячи километров, любовь и трепет к родной земле ты испытываешь всю жизнь.",
    },
    {
      title: "2021",
      description: `Он показал всему миру сплоченность и стойкость белорусов. Что мы можем жить своим умом, дорожить нашими ценностями и вместе создавать новые. Мы выдержали ряд серьезнейших испытаний, прежде всего связанных с коронавирусом, санкциями, волнами миграционного кризиса. Уже сейчас понятно: мы справились только благодаря единству"
    `,
    },
    {
      title: "2022",
      description: `2022 год стал таким ярким на то, чтобы оценить все, что было сделано нашими предками. Мы модернизируем историческое место – «Хатынь». Молодежь, которая приходит туда, должна понимать, что сделали с нами в те непростые годы Великой Отечественной войны. И недопущение забвения истории, недопущение повторения геноцида белорусского народа лежало в основе того, чтобы этот год стал Годом исторической памяти», – подчеркнул Игорь Луцкий.
    "`,
    },
    {
      title: "2023",
      description:
        "В Год мира и созидания в Беларуси сделано многое: мы активно участвуем в формировании нового справедливого мироустройства, наращиваем внутренний экономический потенциал, реализуем крупные социальные проекты и совершенствуем систему патриотического воспитания",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const { count } = useSteps({
    initialStep: activeStep,
    count: steps.length,
  });

  return (
    <>
      <div className="w-full h-screen overflow-y-scroll no-scrollbar">
        <div className="w-full h-[200vh] ">
          <Stepper
            index={activeStep}
            orientation="vertical"
            height="150vh"
            gap="0"
          >
            {steps.map((step, index) => (
              <Step key={index} id={`step-${index}`}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle className="text-black">{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
          <MasonryGallery />
          <p className="text-black">
            2024: ”Мы видим возрастающий спрос на ценности социального
            государства... Возвращение к этим ценностям – вопрос качества жизни
            людей: духовной сферы, экономического благополучия, социальной
            справедливости. Все здесь взаимосвязано“ Александр Лукашенко
            Совещание об основных направлениях работы по совершенствованию
            качества в 2024 году “…только преемственность в воспитании молодёжи
            может привести к результатам…”
          </p>
          <h1 className="text-black">2024</h1>
        </div>
      </div>
      <div className="relative ">
        <video
          autoPlay={play}
          ref={vidRef}
          loop
          className="w-screen h-full object-cover"
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
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-black to-0 w-screen top-[76%]">
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
    </>
  );
}

export default index;
