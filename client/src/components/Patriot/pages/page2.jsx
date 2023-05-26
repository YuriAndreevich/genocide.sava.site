import React from "react";
import fon from "../../../assets/video/mainvideo.mp4";
import ModalComponent from "@/components/ModalComponent";
import Card from "@/components/Card";
import "../shyne.scss";
import img from "../../../assets/cards/4.png";

function page1() {
  return (
    <div>
      <div className="relative ">
        <video autoPlay muted loop className="w-screen h-screen object-cover">
          <source src={fon} type="video/mp4" />
        </video>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-black to-0 w-screen h-screen top-3/4">
          <div className=" absolute container sm:p-20  p-10 m-auto ">
            <p className="font-bold text-2xl sm:text-7xl mb-2 shyne">
              АКТИВНАЯ ЖИЗНЕННАЯ ПОЗИЦИЯ
            </p>
            <p className="text-2xl">Мы - новое поколение,</p>
            <p className="mb-2 text-2xl">Мы выдвигаем свои решения!</p>
            <p className="mb-2 sm:text-xl text-m">
              Формирование устойчивого интереса к явлениям окружающей жизни,
              желание сделать окружающее пространство лучше.
            </p>
            <p className="mb-10 sm:text-xl text-m">
              «АКТИВНАЯ ЖИЗНЕННАЯ ПОЗИЦИЯ» - мероприятия блока дают возможность
              участникам проявить себя в различных социальных ролях.
            </p>

            <div className="flex flex-row gap-10 ">
              <ModalComponent
                name="Ролик социальной направленности «Подари мечте крылья»"
                href="https://drive.google.com/file/d/1Ih_LiRwi5fsNAQGe0oVf_ZYXOi6NktKF/preview"
              >
                <Card
                  src={img}
                  text="Ролик социальной направленности «Подари мечте крылья»"
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
