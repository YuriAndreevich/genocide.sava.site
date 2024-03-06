import React from "react";
import fon from "../../../assets/video/mainvideo.mp4";
import ModalComponent from "@/components/ModalComponent";
import Card from "@/components/Card";
import "../shyne.scss";
import Р3 from "../../../assets/patriot/Р3.pdf";
import img from "../../../assets/cards/1.png";
import img2 from "../../../assets/cards/2.png";
import img3 from "../../../assets/cards/3.png";

function page1() {
  return (
    <div>
      <div className="relative ">
        <video autoPlay muted loop className="w-screen h-full object-cover">
          <source src={fon} type="video/mp4" />
        </video>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-black to-0 w-screen h-screen top-3/4">
          <div className=" absolute container sm:p-20  p-10 m-auto ">
            <p className="font-bold text-6xl sm:text-9xl mb-2 shyne">ПАМЯТЬ</p>
            <p className="text-2xl">Мы – новое поколение!</p>
            <p className="text-2xl">Мы никогда не забудем</p>
            <p className="mb-2 text-2xl ">ваших отважных лиц!</p>
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

            {/* <div >

              <div> */}
            <div className="flex flex-row gap-10 overflow-x-auto ">
              <ModalComponent
                name=" Видео-посвящение «Прадеды, деды – солдаты Победы»"
                href="https://drive.google.com/file/d/1w7ynngNWPR3y4yAg6NmUkbdNoqK_fYff/preview"
              >
                <Card
                  src={img}
                  text="Видео-посвящение «Прадеды, деды – солдаты Победы»"
                />
              </ModalComponent>
              <ModalComponent
                name=" Видео-эстафета «Солдатский подвиг поэтической строкой»"
                href="https://drive.google.com/file/d/1n8LrRleB21mfnwumL24VbTos9D_SnfRH/preview"
              >
                <Card
                  src={img2}
                  text="Видео-эстафета «Солдатский подвиг поэтической строкой»"
                />
              </ModalComponent>
              <ModalComponent
                name="Эстафета поколений «Мир в наследство»"
                href={Р3}
              >
                <Card
                  src={img3}
                  text="Эстафета поколений «Мир в наследство»                       "
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
