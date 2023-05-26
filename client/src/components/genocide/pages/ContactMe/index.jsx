import React, { useRef, useState } from "react";
import "./contactMe.scss";

import emailjs from "emailjs-com";
import { Input, Button, Textarea, useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

function ContactMe() {
  const mainAnim = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 1,
      },
    },
  };

  const [text, setText] = useState("");
  const toast = useToast();
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
    <div className="contactMe text-black" id="contactMe">
      <motion.div
        initial="hidden"
        variants={mainAnim}
        whileInView="visible"
        className="contactMe-content"
      >
        <h2 id="h1">{t("Обратная связь")}</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>{t("Почта")}</label>
          <Input type="email" name="user_email" />
          <label>{t("Сообщение")}</label>
          <Textarea
            onChange={(e) => setText(e.target.value)}
            name="message"
            style={{ marginBottom: "10px" }}
          />
          <Button colorScheme="blackAlpha" type="submit">
            {t("Отправить")}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactMe;
