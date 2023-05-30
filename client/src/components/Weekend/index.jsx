import React from "react";
import SwiperZoom from "../SwiperZoom";
import { data, data2, data3 } from "./data";
import img from "../../assets/img/fon1.jpg";

function index() {
  return (
    <div
      className=" z-0 h-screen w-screen  "
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className="container py-32 m-auto gap-8 items-center jusify-center rounded-2xl flex sm:flex-row flex-col">
        <div className="sm:w-3/12 w-9/12 h-5/6">
          <SwiperZoom data={data} preview={1} />
        </div>
        <div className="sm:w-3/12 w-9/12  h-5/6">
          <SwiperZoom data={data2} preview={1} />
        </div>
        <div className="sm:w-3/12 w-9/12  h-5/6">
          <SwiperZoom data={data3} preview={1} />
        </div>
      </div>
    </div>
  );
}

export default index;