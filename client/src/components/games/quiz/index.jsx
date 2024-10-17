import React from "react";
import Questions from "./Questions";
import Counters from "./counters";

function index() {
  return (
    <div className="container py-32 m-auto ">
      <div className="flex justify-between">
        <Counters />
        <Questions />
      </div>
    </div>
  );
}

export default index;
