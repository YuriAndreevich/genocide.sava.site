import React from "react";
import fon from "../../../assets/video/mainvideo.mp4";
import ModalComponent from "@/components/ModalComponent";
import Card from "@/components/Card";
import "../shyne.scss";
import tt2 from "../../../assets/patriot/tt2.pdf";
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
              ТВОЙ ВКЛАД
            </p>
            <p className="text-2xl">Ведь мы иное поколенье,</p>
            <p className="mb-2 text-2xl"> Мы будущего флаг!</p>
            <p className="mb-2 sm:text-xl text-m">
              Формирование навыков социально-значимой, общественно-полезной
              деятельности на благо мира и созидания.
            </p>
            <p className="mb-10 sm:text-xl text-m">
              «ТВОЙ ВКЛАД» - блок, содержащий цикл мероприятий по осознанию
              учащимися общественно значимого результата своего труда,
              социальной ответственности, взаимовыручки и взаимопомощи.
            </p>
            <div className="flex flex-row gap-10 overflow-auto">
              <ModalComponent
                name=" Видео-обращение «Зачем помогать людям»"
                href="https://drive.google.com/file/d/1dKShCO1ZXq59YGgJDxotQ227FcR_qSDO/preview"
              >
                <Card src={img} text="Видео-обращение «Зачем помогать людям»" />
              </ModalComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page1;
