import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18next";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import admin from "../../assets/svg/admin.svg";
function navbar() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [activeLang, setActiveLang] = useState(2);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы");
  };

  return (
    <nav className="fixed   z-10 w-screen flex flex-wrap sm:flex-column items-center justify-center gap-10 px-2 py-5 bg-gray-300">
      <Link
        to="/"
        className="text-black hover:text-green-600 hover:transition-all"
      >
        {t("Главная")}
      </Link>
      <Link
        to="/news"
        className="text-black hover:text-green-600 hover:transition-all"
      >
        {t("Новости")}
      </Link>
      <Link
        to="/genocide"
        className="text-black hover:text-green-600 hover:transition-all"
      >
        {t("Незаживающие раны памяти")}
      </Link>
      <Link
        to="/map"
        className="text-black hover:text-green-600 hover:transition-all"
      >
        {t("Поэтическая карта")}
      </Link>
      <Link
        to="/weekend"
        className="text-black hover:text-green-600 hover:transition-all"
      >
        {t("Маршруты выходного дня")}
      </Link>
      <Link
        to="/photomuseum"
        className="text-black hover:text-green-600 hover:transition-all"
      >
        {t("Фотолента музея «Беларуская хатка»")}
      </Link>
      <Link
        to="/games"
        className="text-black hover:text-green-600 hover:transition-all"
      >
        {t("Игры")}
      </Link>

      <div className="navbar-menu-help-lang">
        <span
          className={activeLang === 1 && "text-green-600"}
          onClick={() => {
            changeLanguage("bel");
            setActiveLang(1);
          }}
        >
          Рус
        </span>
        /
        <span
          className={activeLang === 2 && " text-green-600"}
          onClick={() => {
            changeLanguage("ru");
            setActiveLang(2);
          }}
        >
          Бел
        </span>
      </div>
      <div className="flex justify-center items-center bg-green-600 text-xs text-white rounded-sm p-1">
        {isAuth ? (
          <>
            <Link to="/admin">
              <img src={admin} alt="" className="h-8 w-8 mr-4" />
            </Link>
            <button onClick={logoutHandler}>Выйти</button>
          </>
        ) : (
          <Link to={"/login"}> Войти </Link>
        )}
      </div>
    </nav>
  );
}

export default navbar;
