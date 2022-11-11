import React from "react";

import fon from "../../assets/video/fon.mp4";

import SVG from "react-inlinesvg";
import waveSVG2 from "../../assets/img/waves2.svg";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import "./main.scss";

function Main() {
  const mainAnim = {
    hidden: {
      y: -300,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="page1" id="main">
        <video
          autoPlay
          muted
          loop
          className="page1-video"
          style={{ maxWidth: "none" }}
        >
          <source src={fon} type="video/mp4" />
        </video>
        <motion.p
        style={{transform: 'translate(-50%, -115%)'}}
          className="main-p"
          initial="hidden"
          variants={mainAnim}
          whileInView="visible"
        >
          <strong>{t("Незаживающие раны памяти")}</strong>
        </motion.p>
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
        <SVG className="page1-divider" src={waveSVG2} />
      </div>
    </>
  );
}

export default Main;
