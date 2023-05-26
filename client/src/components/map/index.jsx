import React from "react";
import map from "../../assets/img/map.png";
import Modal from "../MyModal";
import Location from "../../assets/svg/location.svg";
import ModalComponent from "../ModalComponent";
import img from "../../assets/img/fon2.jpg";

//700 500
function index() {
  return (
    <div
      className=" z-0 h-screen w-screen  "
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className="container py-32 m-auto">
        <div className=" relative flex border-2 rounded-2xl  bg-neutral-900">
          <img src={map} alt="Карта Новополоцка" className="rounded-l-2xl" />
          <ModalComponent href="https://drive.google.com/file/d/10aqq7Xdz01fLpmmokEoDPaUcQOsV_ESG/preview">
            <img
              src={Location}
              alt=""
              className="h-8 w-8 absolute"
              style={{ top: "600px", left: "500px" }}
            />
          </ModalComponent>
          <ModalComponent href="https://drive.google.com/file/d/1VOQf5vSajE986rIw7ShgSSfVH6D3UTHH/preview">
            <img
              src={Location}
              alt=""
              className="h-8 w-8 absolute"
              style={{ top: "300px", left: "300px" }}
            />
          </ModalComponent>
          <ModalComponent href="https://drive.google.com/file/d/1KFQnIxvr4mXtIl4aBeVBAP00DMakzAeI/preview">
            <img
              src={Location}
              alt=""
              className="h-8 w-8 absolute"
              style={{ top: "100px", left: "300px" }}
            />
          </ModalComponent>
          <ModalComponent href="https://drive.google.com/file/d/1wXXYZB3rxoK2hH0FCyt8s_zpnWQuQcxm/preview">
            <img
              src={Location}
              alt=""
              className="h-8 w-8 absolute"
              style={{ top: "500px", left: "300px" }}
            />
          </ModalComponent>
          <ModalComponent href="https://drive.google.com/file/d/1gfG415QmJFmTgMRr41fe0I2vA9fQfkkD/preview">
            <img
              src={Location}
              alt=""
              className="h-8 w-8 absolute"
              style={{ top: "400px", left: "290px" }}
            />
          </ModalComponent>
          <ModalComponent href="https://drive.google.com/file/d/1HfcUnr-FDmIZ7YvK8Tmc9p12_Zjexg_e/preview">
            <img
              src={Location}
              alt=""
              className="h-8 w-8 absolute"
              style={{ top: "300px", left: "480px" }}
            />
          </ModalComponent>
          <ModalComponent href="https://drive.google.com/file/d/1bcmDk3FjO9YdiOfp4iSTdnKq2qRMPG6j/preview">
            <img
              src={Location}
              alt=""
              className="h-8 w-8 absolute"
              style={{ top: "560px", left: "200px" }}
            />
          </ModalComponent>

          <div className="flex flex-col m-auto gap-10 justify-center">
            <p>Памятник воинам освободителям </p>

            <p>Мемориальная доска в память Героя СоветскогоСоюза В.ИЕронько</p>

            <p>Памятник Лилии Костецкой</p>

            <p>Мемориальный знак на месте гибели советского самолета</p>

            <p>Братская могила воинов-освободителей 219 гвардейского полка</p>

            <p>Мемориал жертвам фашизма</p>

            <p>Могила пионера Димы Потапенко</p>

            <p>Могила жертвам войны</p>

            <p>Мемориальный знак партизанскому отряду «Смерть фашизму!»</p>

            <p>Мемориальная плита «От славы боевой - к славе трудовой!»</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
