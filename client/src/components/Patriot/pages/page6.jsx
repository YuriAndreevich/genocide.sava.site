import React from "react";
import fon from "../../../assets/video/mainvideo.mp4";
import ModalComponent from "@/components/ModalComponent";
import Card from "@/components/Card";
import "../shyne.scss";
import o2 from "../../../assets/patriot/o2.pdf";
import o1 from "../../../assets/patriot/o1.pdf";
import img from "../../../assets/img/no-image.png";

function page1() {
  return (
    <div>
      <div className="relative ">
        <video autoPlay muted loop className="w-screen h-screen object-cover">
          <source src={fon} type="video/mp4" />
        </video>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-black to-0 w-screen h-screen top-3/4">
          <div className=" absolute container sm:p-20  p-10 m-auto ">
            <p className="font-bold text-2xl sm:text-9xl mb-2 shyne">
              ОТЕЧЕСТВО КАК ЦЕННОСТЬ
            </p>
            <p className="text-2xl">Мы верны своей отчизне,</p>
            <p className="text-2xl mb-2">мы-времени новых рук!</p>
            <p className="mb-2 sm:text-xl text-m">
              Повышение интереса к созидательному труду, сохранению мира,
              преумножению богатства Беларуси; повышение культуры этнических
              отношений.
            </p>
            <p className="mb-10 sm:text-xl text-m">
              «ОТЕЧЕСТВО КАК ЦЕННОСТЬ» - блок, который помогает выстроить работу
              по знакомству с государственными ориентирами, идеалами Республики
              Беларусь и по их приятию; по знакомству с народами, населяющими
              нашу страну, их обычаями и традициями.
            </p>
            <div className="flex flex-row gap-10 overflow-scroll">
              <ModalComponent
                name=" Актуальная папка для правового ликбеза «Сила закона»"
                href={o1}
              >
                <Card
                  src={img}
                  text="Актуальная папка для правового ликбеза «Сила закона»"
                />
              </ModalComponent>
              <ModalComponent
                name=" Встреча-диалог культур «Нас познакомил Новополоцк»"
                href={o2}
              >
                <Card
                  src={img}
                  text="Встреча-диалог культур «Нас познакомил Новополоцк»"
                />
              </ModalComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page1;
