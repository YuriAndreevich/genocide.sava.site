import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Page = ({ offset, gradient, onClick, children }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      <span>{children}</span>
    </ParallaxLayer>
  </>
);

export default function App() {
  if (localStorage.getItem("showAnnotation") == "true") {
    return null;
  } else {
    return <Render />;
  }
}

function Render() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  const navigate = useNavigate();

  return (
    <div className="overflow" style={{ background: "#dfdfdf" }}>
      <Parallax
        className={styles.container}
        ref={parallax}
        pages={3}
        horizontal
      >
        <Page offset={0} gradient="pink" onClick={() => scroll(1)}>
          <p className="text-2xl p-10 text-white">
            <div className="text-green-600 mb-10">Цель работы:</div>

            <p className="mb-10 ml-10">
              сохранение памяти о людях, испытавших на себе ужасы рабского
              существования в годы Второй мировой войны.
            </p>
            <div className="text-green-600 mb-10">Задачи работы:</div>

            <p className="mb-10 ml-10">
              Собрать, обобщить и систематизировать материал на тему «Малолетние
              узники нацизма».
            </p>
            <p className="mb-10 ml-10">
              Осмыслить актуальность темы «Малолетние узники нацизма».
            </p>
            <p className="ml-10">
              С материалами исследования принимать участие в конкурсах, акциях
              для популяризации темы.
            </p>
          </p>
        </Page>
        <Page
          offset={1}
          gradient="teal"
          onClick={() => {
            scroll(2);
            localStorage.setItem("showAnnotation", "true");
            const box = document.getElementById("annotarion");
            box.remove();
          }}
        >
          <p className="text-2xl p-10 text-white">
            <div className="text-green-600 mb-10">
              В работе мы использовали следующие основные методы исследования:
            </div>

            <p className="mb-10 ml-10">
              анализ материалов личных архивов и публицистики; интервьюирование;
              анкетирование.
            </p>
            <div className="text-green-600 mb-10">Гипотеза:</div>

            <p className="mb-10 ml-10">
              Полученный, обработанный и распространенный нами материал поможет
              молодому поколению более глубоко понять сущность объявленного 2023
              года Годом мира и созидания.
            </p>
          </p>
        </Page>
      </Parallax>
    </div>
  );
}
