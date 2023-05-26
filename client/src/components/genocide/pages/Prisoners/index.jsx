import React from "react";
import "./Prisoners.scss";

import HTMLFlipBook from "react-pageflip";
import Prisonersjpg from "../../../../assets/genocide/img/Prisoners.jpg";
import prisonersBook from "../../../../assets/genocide/img/prisonersBook.jpg";
import prisonersBook2 from "../../../../assets/genocide/img/prisonersBook2.jpg";
import Book from "../../../../assets/genocide/img/book.jpg";

import "swiper/scss";
import "swiper/scss/pagination";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

function Prisoners() {
  const { t } = useTranslation();

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
        duration: 1.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      id="prisoners"
      variants={mainAnim}
    >
      <svg class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={550}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        style={{
          margin: "0 auto",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        className="text-black"
      >
        <img src={prisonersBook} className="prisoners-book-cover" alt="" />

        <div className="prisoners-book">
          <h2 id="h2">{t("Малолетние узники нацизма, кто они?")}</h2>
          <p id="p">
            {t(
              "В годы Второй мировой войны в нацистских лагерях, гетто, других местах принудительного содержания погибло более 11 миллионов советских людей – мужчин, женщин и детей, а почти 5 миллионов - были увезены из – под родного крова и превращены в рабов гитлеровского рейха. Кто же такие малолетние узники нацизма? Существуют ли нормативно – правовые документы, регламентирующие их положение?"
            )}
          </p>
        </div>

        <div className="prisoners-book">
          <p id="p">
            {t(
              "От Овсянкиной И.Е. мы узнали, что такие документы существуют только  России. На сайте Министерства труда и социального развития оссийской Федерации мы нашли Постановление от 07.07.99 г. № 20, огласно которому малолетними узниками считаются «...проживающие на территории РФ бывшие несовершеннолетние граждане, которые в годы второй мировой войны в возрасте до 18 лет содержались или родились в концлагерях, гетто, других местах принудительного содержания, созданных фашистами и их союзниками на территориях Германии и союзных с нею стран, а также"
            )}
          </p>
        </div>

        <div className="prisoners-book">
          <p id="p">
            {t(
              "на оккупированных ими территориях бывшего СССР и стран Европы». Существует еще один сайт, на котором бывшие узники, в том числе и малолетние, высказывают своё мнение о необходимости создания правовой базы их положения и в Беларуси. Дети, угнанные в нацистскую неволю, содержались наравне со взрослыми, причем в условиях тюремного режима, в концентрационных и трудовых лагерях, находились под стражей.Эти документы также говорят о своевременности и актуальности нашего исследования."
            )}
          </p>
        </div>
        <div className="prisoners-book">
          <p id="p">
            {t(
              "Анализируя собранный в ходе исследования фактический материал, мы столкнулись с разными типами нацистских лагерей: концентрационный лагерь, лагерь – тюрьма, трудовой лагерь, транзитный лагерь, лагерь смерти. По воспоминаниям наших собеседников мы сделали вывод, что они находились в трудовых лагерях. В трудовых лагерях содержалось, в основном, угнанное с оккупированных территорий трудоспособное население, женщины, а также дети с 11 лет. В таких лагерях реже использовались жестокие телесные наказания и размер продовольственного пайка был рассчитан на минимальное поддержание рабочей силы."
            )}
          </p>
        </div>
        <div className="prisoners-book">
          <img
            src={Prisonersjpg}
            alt=""
            style={{ maxWidth: "80", margin: "30px auto " }}
          />
        </div>
        <img src={prisonersBook2} alt="" />
      </HTMLFlipBook>
    </motion.div>
  );
}

export default Prisoners;
