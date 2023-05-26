import React from "react";
import "./KidFade.scss";
import { Divider, Center } from "@chakra-ui/react";

import kidFadeFon from "../../../../assets/genocide/img/kidFadeFon.jpg";

import KidFade1 from "../../../../assets/genocide/img/KidFade1.jpg";
import KidFade2 from "../../../../assets/genocide/img/KidFade2.jpg";
import KidFade3 from "../../../../assets/genocide/img/KidFade3.jpg";

import i1 from "../../../../assets/genocide/irina/1.jpg";
import i2 from "../../../../assets/genocide/irina/2.jpg";
import i3 from "../../../../assets/genocide/irina/3.jpg";
import i4 from "../../../../assets/genocide/irina/4.jpg";
import i5 from "../../../../assets/genocide/irina/5.jpg";
import i6 from "../../../../assets/genocide/irina/6.jpg";

import v1 from "../../../../assets/genocide/vladimir/v1.jpg";
import v2 from "../../../../assets/genocide/vladimir/v2.jpg";

import a1 from "../../../../assets/genocide/anatol/a1.jpg";
import a2 from "../../../../assets/genocide/anatol/a2.jpg";
import a3 from "../../../../assets/genocide/anatol/a3.jpg";
import a4 from "../../../../assets/genocide/anatol/a4.jpg";
import a5 from "../../../../assets/genocide/anatol/a5.jpg";
import a6 from "../../../../assets/genocide/anatol/a6.jpg";

import Modal from "../../../modal";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

function KidFade() {
  const { t } = useTranslation();
  const irinaSlider = [i1, i2, i3, i4, i5, i6];
  const vladimirSlider = [v1, v2];
  const anatolSlider = [a1, a2, a3, a4, a5, a6];

  const mainAnim = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 1,
      },
    },
  };

  return (
    <div style={{ padding: "10px" }}>
      <motion.div
        className="kidFade text-black"
        id="kidFade"
        initial="hidden"
        variants={mainAnim}
        whileInView="visible"
      >
        <h1 id="h1">{t("Судьбы детей, лишённых детства")}</h1>
        <p id="p">
          {t(
            "Полученные данные: воспоминания, материалы личных архивов, фото-материалы, позволяют рассмотреть жизненный путь наших собеседников. Для интервью и изучения жизненного пути бывших малолетних узников нацистских лагерей мы разработали план - опросник, который помог системно составить содержание работы."
          )}
          <div className="kidFade-flex">
            <div className="kidFade-flex-colum">
              <ul>
                {t("Опросник:")}
                <li>{t("Фамилия, имя, отчество.")}</li>
                <li> {t("Дата и место рождения.")}</li>
                <li>
                  {t(
                    "При каких обстоятельствах попали в плен? Время и места пребывания в плену."
                  )}
                </li>
                <li>
                  {t("Считаете ли Вы себя самореализовавшимся человеком?")}
                </li>
              </ul>
            </div>
            <Center height="200px">
              <Divider orientation="vertical" />
            </Center>
            <div className="kidFade-flex-colum">
              <ul>
                {t("План:")}
                <li>{t("Оккупация.")}</li>
                <li>{t("Угон на чужбину.")}</li>
                <li>{t("Положение детей и матерей в лагерях.")}</li>
                <li>{t("Возвращение на Родину.")}</li>
                <li>{t("Послевоенный жизненный путь.")}</li>
              </ul>
            </div>
          </div>
        </p>
        <div className="kidFade-card">
          <div className="kidFade-card-anim">
            <Modal
              title={"ИРИНА ЕВСТАФЬЕВНА ОВСЯНКИНА"}
              img={KidFade1}
              slider={irinaSlider}
            />
          </div>
          <div className="kidFade-card-anim">
            <Modal
              title={"ВЛАДИМИР ПАНТЕЛЕЙМОНОВИЧ ВОЛОВИКОВ"}
              img={KidFade2}
              slider={vladimirSlider}
            />
          </div>
          <div className="kidFade-card-anim">
            <Modal
              title={"ГОЛОВЧЕНКО АНАТОЛИЙ ПЕТРОВИЧ"}
              img={KidFade3}
              slider={anatolSlider}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default KidFade;
