import React, { useState } from "react";
import Button from "../../Button";
import { Select } from "@chakra-ui/react";
function Questions() {
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [num, setNum] = useState(0);
  const [optionNum, setOptionNum] = useState(0);
  const handleClick = () => {
    setNum(randomNumberInRange(0, data[optionNum].length - 1));
  };
  const data = [
    [
      {
        id: 1,
        question: "Самый известный символ Беларуси среди представителей фауны.",
      },
      { id: 2, question: "Эта птица – символ чистоты и возрождения Беларуси." },
      {
        id: 3,
        question:
          "В послевоенные годы эта крепость получила почетное звание «Крепость –герой».",
      },
      {
        id: 4,
        question:
          "Этот замок – уникальный памятник архитектуры, который находится в списке объектов всемирного культурного наследия ЮНЕСКО.",
      },
      {
        id: 5,
        question:
          "Название мемориального комплекса, созданного на месте сожжённой фашистами деревни",
      },
    ],
    [
      {
        id: 1,
        question:
          "Просветительская деятельность, открытие иконописной мастерской,влияние на общественную жизнь Полоцеп XII века",
      },
      {
        id: 2,
        question:
          "Восточнославянский первопечатник, философ-гуманист, писатель, общественный деятель, предприниматель и учёный-медик. Перевел на белорусский язык книги Библии, издал эти книги.",
      },
      {
        id: 3,
        question:
          "Белорусский советский писатель, поэт, переводчик. Один из классиков и основоположников новой белорусской литературы, посвятивший свои произведения полесскому краю.",
      },
      {
        id: 4,
        question:
          "Белорусский писатель, общественный деятель, участник Великой Отечественной войны, посвятивший военной теме значительную часть своих произведений.",
      },
      {
        id: 5,
        question:
          "Белорусская писательница, журналистка, сценарист документальных фильмов. Лауреат Нобелевской премии по литературе 2015 года. ",
      },
    ],
  ];

  return (
    <div className=" w-96">
      <Select
        placeholder="Выберите БРЕЙНШТОРМ"
        bg="white"
        className="text-black bg-white mb-2"
      >
        <option value="1">Викторина «Моя Беларусь»</option>
        <option value="2">Станция «Беларусь под солнцем столетий»</option>
      </Select>
      <div className="text-xl mb-2">{data[optionNum][num].question}</div>
      <Button onClick={handleClick}>Выбрать вопрос</Button>
    </div>
  );
}

export default Questions;
