import { Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

import Navbar from "./components/navbar";
import Divider from "./components/divider";

import Main from "./pages/main/main";
import ContactMe from "./pages/ContactMe";
import Prisoners from "./pages/Prisoners";
import MeaninghSite from "./pages/MeaninghSite";
import Сonclusions from "./pages/Сonclusions";
import KidFade from "./pages/KidFade";
import WeNovopolock from "./pages/weNovopolock";
import AboutWe from "./pages/aboutWe";
import Genocid from "./pages/Genocide";

import w1 from "./assets/img/waves1.svg";
import w2 from "./assets/img/waves2.svg";
import w4 from "./assets/img/waves4.svg";

import AOS from "aos";
import "aos/dist/aos.css";

import "normalize.css";
import "./app.scss";
import AudioDialog from "./pages/audioDialog";
import Anketa from "./pages/anketa";

function App() {
  AOS.init();
  return (
    <Suspense fallback={<Spinner />}>
      <div className="App">
        <Navbar />
        <Main />
        <AboutWe />
        <Divider wave={w1} rotate bottom='-1'/>
        <Genocid />
        <Divider wave={w2} top='-1' />
        <Prisoners />
        <Divider wave={w1} rotate  />
        <WeNovopolock />
        <Divider wave={w2}  top='-1'/>
        <KidFade />
        <Divider wave={w4} rotate />
        <AudioDialog/>
        <Divider wave={w2}  top='-1'/>
        <MeaninghSite />
        <Divider wave={w1} rotate bottom='-1' />

        <Сonclusions />
        <Divider wave={w2}  top='-1'/>

        <Anketa/>

        <Divider wave={w2} rotate bottom='-1' />
        <ContactMe />
      </div>
    </Suspense>
  );
}

export default App;
