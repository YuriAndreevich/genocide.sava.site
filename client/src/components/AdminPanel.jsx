import React from "react";
import { Link } from "react-router-dom";

function AdminPanel() {
  return (
    <div className="conteiner m-auto pt-32 flex flex-col gap-10 justify-center items-center ">
      <Link to="/newpost" className="bg-green-600 p-3 rounded-md w-1/3">
        <button>Добавить новость</button>
      </Link>
      <button className="bg-neutral-900 opacity-50 p-3 rounded-md w-1/3">
        БРЭЙНШТОРМ: Добавить вопросы БРЭЙНШТОРМ
      </button>
      <button className="bg-neutral-900 opacity-50 p-3 rounded-md w-1/3">
        Найди пару: редактировать картинки
      </button>
    </div>
  );
}

export default AdminPanel;
