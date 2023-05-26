import React, { useState, useRef } from "react";
import "./anketa.scss";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { Button, Checkbox, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Anketa() {
  const anketa = [
    {
      question: "1.	Знаете ли Вы о бывших малолетних узниках нацизма?",
      otvet: ["Да", "Нет"],
    },
    {
      question: "2.	Ваше отношение к малолетним узниках нацизма:",
      otvet: [
        "Отношусь с сочувствием",
        "Отношусь безразлично",
        "Затрудняюсь ответить",
      ],
    },
    {
      question:
        "3.	После тяжелых испытаний  в нацистской неволе отношение к узникам на Родине было подозрительным  и  это сказалось у  некоторых на дальнейшей  судьбе.",
      otvet: [
        "Справедливо такое отношение к бывшим узникам?",
        "Несправедливо такое отношение к бывшим узникам?",
        "Затрудняюсь ответить",
      ],
    },
    {
      question:
        "4.	Международный день освобождения узников фашистских концлагерей  отмечается по инициативе:",
      otvet: ["ООН", "ЮНЕСКО", "СССР"],
    },
    {
      question: "5.	Как вы расцениваете период пребывания ребенка в плену?",
      otvet: ["Изменник", "Жертва", "Герой", "Затрудняюсь ответить"],
    },
    {
      question:
        "6.	 Важно ли для вас то, что делают сейчас в Беларуси для жертв нацизма?",
      otvet: ["Да", "Нет", "Затрудняюсь ответить"],
    },
    {
      question:
        "7.	Устраивает ли вас то, каким образом сохраняется сегодня память об этих узниках?",
      otvet: ["Да", "Нет", "Затрудняюсь ответить"],
    },
  ];

  const { t } = useTranslation();

  const [toSend, setToSend] = useState("");
  const [answer, setAnswer] = useState([]);

  function Change(e) {
    setAnswer([...answer, toSend]);
  }

  const form = useRef();
  function sendEmail(e) {
    emailjs
      .sendForm(
        "service_0bwblopdsadsa",
        "template_on1xj5e",
        form.current,
        "-ZOPamhh08EoPestB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const mainAnim = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 1,
      },
    },
  };

  return (
    <div style={{ padding: "10px" }}>
      <motion.div
        initial="hidden"
        variants={mainAnim}
        whileInView="visible"
        className="anketa text-black"
        id="anketa"
      >
        <h1 id="h1">
          {t("Анкета информированности по теме «Малолетние узники нацизма»")}
        </h1>

        <p id="p">
          {t(
            "С целью определения степени информированности современной молодежи, а также их отношения к бывшим малолетним узникам, учащиеся объединения «Гражданин нового века» предлагают Анкету информированности."
          )}
        </p>
        <form ref={form} onSubmit={sendEmail}>
          {anketa.map((item, i) => (
            <p id="p" key={i}>
              {t(`${item.question}`)}

              <p id="p">
                {item.otvet.map((otvet, i) => (
                  <p id="p" key={i}>
                    <Checkbox
                      onChange={(e) => {
                        setToSend(otvet);
                        Change();
                      }}
                    >
                      {t(`${otvet}`)}
                    </Checkbox>
                  </p>
                ))}
              </p>
            </p>
          ))}
          <Button colorScheme="blackAlpha" type="submit">
            {t("Отправить")}
          </Button>
          <div style={{ display: "none" }}>
            {answer.map((answer, i) => (
              <Input name={`o${i}`} value={answer} />
            ))}
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Anketa;
