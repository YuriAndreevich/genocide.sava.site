import React from "react";
import fon from "../../../assets/video/mainvideo.mp4";
import ModalComponent from "@/components/ModalComponent";
import Card from "@/components/Card";
import "../shyne.scss";
import data from "../../../assets/patriot/rod1/data";

import p2 from "../../../assets/patriot/p2.pdf";
import img from "../../../assets/img/no-image.png";
import img2 from "../../../assets/cards/9.png";
import img3 from "../../../assets/cards/10.png";

function page1() {
  return (
    <div>
      <div className="relative ">
        <video autoPlay muted loop className="w-screen h-full object-cover">
          <source src={fon} type="video/mp4" />
        </video>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-black to-0 w-screen h-screen top-3/4">
          <div className=" absolute container sm:p-20  p-10 m-auto ">
            <p className="font-bold text-6xl sm:text-9xl mb-2 shyne">
              РОДИНА МАЛАЯ
            </p>
            <p className="text-2xl">Мы – новое поколение!</p>
            <p className="text-2xl mb-2">Мы будущего звено!</p>
            <p className="mb-2 sm:text-xl text-m">
              Воспитание уважения к ратному подвигу белорусского народа в годы
              <p className="sm:text-xl text-m">
                самой страшной войны в истории человечества – Великой
                Отечественной.
              </p>
            </p>
            <p className="mb-10 sm:text-xl text-m">
              «ПАМЯТЬ» представляет собой блок мероприятий, посвященных Великой
              Победе.
            </p>

            <div className="flex flex-row gap-10 overflow-auto">
              <ModalComponent
                name=" Виртуальное краеведческое ориентирование «1160 лет городу Полоцку»"
                href=""
                data={data}
              >
                <Card
                  src={img}
                  text="Виртуальное краеведческое ориентирование «1160 лет городу Полоцку»"
                />
              </ModalComponent>
              <ModalComponent
                name=" Турнир знатоков «Тайны полоцкой истории»"
                href={p2}
              >
                <Card
                  src={img2}
                  text="Турнир знатоков «Тайны полоцкой истории»"
                />
              </ModalComponent>
              <ModalComponent
                name="Буктрейлер к роману Т.Хаткевича «Песня Двины»"
                href="https://drive.google.com/file/d/1uouBiIvedoGWXA7XPySB-rIHR3KRoNuO/preview"
              >
                <Card
                  src={img3}
                  text="Буктрейлер к роману Т.Хаткевича «Песня Двины»"
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
