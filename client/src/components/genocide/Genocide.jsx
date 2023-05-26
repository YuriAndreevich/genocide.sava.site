import { Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";

import Divider from "../divider";

import { ChakraProvider } from "@chakra-ui/react";

import Main from "./pages/main/main";
import ContactMe from "./pages/ContactMe";
import Prisoners from "./pages/Prisoners";
import MeaninghSite from "./pages/MeaninghSite";
import Сonclusions from "./pages/Сonclusions";
import KidFade from "./pages/KidFade";
import WeNovopolock from "./pages/weNovopolock";
import AboutWe from "./pages/aboutWe";
import Genocid from "./pages/Genocide";

import w1 from "../../assets/genocide/img/waves1.svg";
import w2 from "../../assets/genocide/img/waves2.svg";
import w4 from "../../assets/genocide/img/waves4.svg";

import "./app.scss";
import AudioDialog from "./pages/audioDialog";
import Anketa from "./pages/anketa";

//import Fullpage, {FullpageSection, FullpageSections} from '@ap.cx/react-fullpage'
import Annotaion from "../Annotation";

function Genocide() {
  // useEffect(() => {
  //   if (localStorage.getItem("showAnnotation") == "true") {
  //     const box = document.getElementById("annotarion");
  //     box.remove();
  //   }
  // }, [localStorage.getItem("showAnnotation")]);
  return (
    <div className="bg-white">
      {localStorage.getItem("showAnnotation") == "true" ? null : (
        <div
          id="annotarion"
          className="fixed z-50 h-screen w-screen overflow-x-hidden"
        >
          <Annotaion />
        </div>
      )}

      <Main />
      <AboutWe />
      <Divider wave={w1} rotate bottom="-1" />
      <Genocid />
      <Divider wave={w2} top="-1" />
      <Prisoners />
      <Divider wave={w1} rotate />
      <WeNovopolock />
      <Divider wave={w2} top="-1" />
      <KidFade />
      <Divider wave={w4} rotate />
      <AudioDialog />
      <Divider wave={w2} top="-1" />
      <MeaninghSite />
      <Divider wave={w1} rotate bottom="-1" />
      <Сonclusions />
      <Divider wave={w2} top="-1" />
      <Anketa />
      <Divider wave={w2} rotate bottom="-1" />
      <ContactMe />
    </div>
  );
}

export default Genocide;
