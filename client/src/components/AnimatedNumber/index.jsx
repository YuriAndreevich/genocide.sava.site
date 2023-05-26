import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.div className="text-3xl sm:text-5xl text-green-600">
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
}

function index({ number, text }) {
  const { t } = useTranslation();

  return (
    <div className="w-1/2 text-center">
      <Number n={number} />
      <p className="text-sm sm:text-xl">{t(`${text}`)}</p>
    </div>
  );
}

export default index;
