import React, { useState } from "react";
import Button from "../../Button";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

const initialCounters = [];

function counter() {
  const [counters, setCounters] = useState(initialCounters);
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const minus = (id) => {
    const updatedCounts = counters.map((el) =>
      el.id == id ? { ...el, value: el.value - 1 } : el
    );
    setCounters(updatedCounts);
  };
  const plus = (id) => {
    const updatedCounts = counters.map((el) =>
      el.id == id ? { ...el, value: el.value + 1 } : el
    );
    setCounters(updatedCounts);
  };
  const addCounter = () => {
    if (text.length) {
      const newCouner = {
        id: Math.random(),
        value: 0,
        text: text,
      };
      setCounters([...counters, newCouner]);
      setText("");
    } else window.alert("Введите имя!");
  };
  const removeCounter = (id) => {
    const newListCouners = counters.filter((value) => {
      return value.id !== id;
    });
    setCounters(newListCouners);
  };

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [num, setNum] = useState(0);
  const handleClick = () => {
    setNum(randomNumberInRange(0, counters.length - 1));
    console.log(counters[num]?.name);
  };

  const navigate = useNavigate();

  function win() {
    confetti();

    setTimeout(() => {
      navigate("/games/");
    }, 5000);
  }
  return (
    <div>
      <input
        className="text-black mr-2"
        value={text}
        onChange={handleOnChange}
      />
      <Button onClick={addCounter}>Добавить игрока</Button>
      <Button onClick={handleClick}>Выбрать игрока</Button>
      {counters[num]?.text}
      {counters.map((el) => (
        <div key={el.id}>
          <div className="bg-green-600 text-xl rounded-xl items-center flex flex-row justify-between p-2 mt-2 my-4">
            <p className="">{el.text}</p>
            <button onClick={() => removeCounter(el.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#DC2626"
                height="800px"
                width="800px"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 27.965 27.965"
                xml:space="preserve"
                className="h-4 w-4"
              >
                <g>
                  <g id="c142_x">
                    <path d="M13.98,0C6.259,0,0,6.261,0,13.983c0,7.721,6.259,13.982,13.98,13.982c7.725,0,13.985-6.262,13.985-13.982    C27.965,6.261,21.705,0,13.98,0z M19.992,17.769l-2.227,2.224c0,0-3.523-3.78-3.786-3.78c-0.259,0-3.783,3.78-3.783,3.78    l-2.228-2.224c0,0,3.784-3.472,3.784-3.781c0-0.314-3.784-3.787-3.784-3.787l2.228-2.229c0,0,3.553,3.782,3.783,3.782    c0.232,0,3.786-3.782,3.786-3.782l2.227,2.229c0,0-3.785,3.523-3.785,3.787C16.207,14.239,19.992,17.769,19.992,17.769z" />
                  </g>
                  <g id="Capa_1_104_"></g>
                </g>
              </svg>
            </button>
          </div>
          <div className="flex flex-row">
            <button onClick={() => plus(el.id)}>+</button>
            <div className="mx-2">
              {el.value == 20 && win()}
              {el.value}
            </div>
            <button onClick={() => minus(el.id)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default counter;
