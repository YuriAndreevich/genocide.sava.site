import React, { useState, useRef } from "react";
import "./anketa.scss";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function Anketa() {
  const [answer, setAnswer] = useState([]);
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

  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0bwblopdsadsa",
        "template_9rp22kl",
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

  function Change() {
    setAnswer([...answer]);
  }
  return (
    <div style={{ padding: "10px" }}>
      <div className="anketa" id="anketa">
        <h1>Анкета информированности по теме «Малолетние узники нацизма»</h1>

        <p>
          С целью определения степени информированности современной молодежи, а
          также их отношения к бывшим малолетним узникам, учащиеся объединения
          «Гражданин нового века» предлагают Анкету информированности.
        </p>
        {anketa.map((item, i) => (
          <p>
            {item.question}
            <p>{item.otvet}</p>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Anketa;


//import { Input, Button, Textarea } from "@chakra-ui/react";
// <div className='contactMe' id='contactMe'>
//     <div data-aos="fade-up" data-aos-delay="300">

//         <div className='contactMe-content'>
//             <h2>{t('Обратная связь')}</h2>
//             <form ref={form} onSubmit={sendEmail}  >
//                 <label>{t('Почта')}</label>
//                 <Input type="email" name="user_email" />
//                 <label>{t('Сообщение')}</label>
//                 <Textarea name="message" style={{ marginBottom: '10px' }} />
//                 <Button colorScheme='blackAlpha' type="submit" > {t('Отправить')}</Button>
//             </form>
//         </div>
//     </div>
// </div >
//