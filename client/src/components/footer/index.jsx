import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import Button from "../Button";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function index() {
  const [text, setText] = useState("");
  const { t } = useTranslation();

  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    if (text.length > 0) {
      emailjs
        .sendForm(
          "service_0bwblopdsadsa",
          "template_9rp22kl",
          form.current.length !== 0 && form.current,
          "-ZOPamhh08EoPestB"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast({
              title: "Отправлено",
              description: "Ваше сообщение было успешно отправлено!",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      toast({
        title: "Ошибка",
        description: "Заполните все поля!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <div className="sticky top-full  w-screen  bg-neutral-900">
      <div className="w-2/3  justify-between p-3 m-auto items-center sm:flex flex-none gap-3">
        <div className=" flex flex-col ">
          <Link to="/" className="hover:text-green-600 hover:transition-all">
            {t("Главная")}
          </Link>
          <Link
            to="/news"
            className="hover:text-green-600 hover:transition-all"
          >
            {t("Новости")}
          </Link>
          <Link
            to="/genocide"
            className="hover:text-green-600 hover:transition-all"
          >
            {t("Незаживающие раны памяти")}
          </Link>
          <Link to="/map" className="hover:text-green-600 hover:transition-all">
            {t("Поэтическая карта")}
          </Link>
          <Link
            to="/weekend"
            className="hover:text-green-600 hover:transition-all"
          >
            {t("Маршруты выходного дня")}
          </Link>
          <Link
            to="/photomuseum"
            className="hover:text-green-600 hover:transition-all"
          >
            {t("Фотолента музея «Беларуская хатка»")}
          </Link>
          <Link
            to="/games"
            className="hover:text-green-600 hover:transition-all"
          >
            {t("Игры")}
          </Link>
        </div>
        <div className="flex flex-col gap-y-2">
          <p>{t("Обратная связь")}</p>
          <form
            className="flex flex-col gap-y-2"
            ref={form}
            onSubmit={sendEmail}
          >
            <label>{t("Почта")}</label>
            <input type="email" name="user_email" className="text-black" />
            <label>{t("Сообщение")}</label>
            <textarea
              className="text-black"
              onChange={(e) => setText(e.target.value)}
              name="message"
            />
            <Button type="submit">{t("Отправить")}</Button>
          </form>
        </div>

        <a
          href="https://github.com/YuriAndreevich"
          target="_blank"
          rel="noreferrer"
          className="лflex"
        >
          <img
            className="h-12 content-center "
            src="https://preview.colorlib.com/theme/stellar/images/clients/icon-github.svg"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}

export default index;
