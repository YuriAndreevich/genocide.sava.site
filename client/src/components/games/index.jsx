import React from "react";
import MemoryGame from "./MemoryGame";
import Card from "../Card";
import { Link } from "react-router-dom";
import memory from "../../assets/games/1.png";
import quiz from "../../assets/games/2.jpg";

function index() {
  return (
    <div className="container h-5/6 py-32 m-auto flex flex-row gap-6 justify-center items-center overflow-x-auto">
      <Link to="/games/quiz">
        <Card text="БРЕЙНШТОРМ" src={quiz} />
      </Link>
      <Link to="/games/memorygame">
        <Card text="Найди пару" src={memory} />
      </Link>
      {/* <MemoryGame /> */}
    </div>
  );
}

export default index;
