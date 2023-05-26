import React from "react";
import fon from "../../../assets/video/mainvideo.mp4";
import ModalComponent from "@/components/ModalComponent";
import ModalSwiper from "@/components/SwiperZoom/ModalSwiper";
import Card from "@/components/Card";
import "../shyne.scss";
import data from "../../../assets/patriot/i1/data";
import i2 from "../../../assets/patriot/i2.pdf";
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
            <p className="font-bold text-4xl sm:text-9xl mb-2 shyne">
              ИНИЦИАТИВА
            </p>
            <p className="text-2xl">Мы открыватели новых судеб,</p>
            <p className="text-2xl mb-2">Новых побед и больших границ!</p>
            <p className="mb-2 sm:text-xl text-m">
              Привлечение учащихся к созидательной общественно-полезной
              деятельности; развитие лидерских качеств и креативного мышления
            </p>
            <p className="mb-10 sm:text-xl text-m">
              «ИНИЦИАТИВА» - блок, включающий в себя мероприятия по продвижению
              любых благ, мирных инициатив, нацеленных на устойчивое развитие и
              благополучие нашей страны.
            </p>

            <div className="flex flex-row gap-10 overflow-scroll ">
              <ModalSwiper
                name=" Акция «Размаўляй са мной па-беларуску»"
                href=""
                data={data}
              >
                <Card src={img} text="Акция «Размаўляй са мной па-беларуску»" />
              </ModalSwiper>
              <ModalComponent
                name=" Историко-краеведческий маршрут «Поведай подвиги усатого героя»"
                href={i2}
              >
                <Card
                  src={img}
                  text="Историко-краеведческий маршрут «Поведай подвиги усатого героя»"
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
