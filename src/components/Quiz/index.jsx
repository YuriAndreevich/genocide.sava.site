import React, { useState } from "react";
import { questions } from "./testData";
import { card } from "./testData";

function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const refresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const [visablePopup, setVisablePopup] = useState(false);
  const [visableTest, setVisableTest] = useState(false);

  return (
    <>
      <div className="card">
        {/* <img src={q1} alt='q1' /> */}
        <p>{card[0].name}</p>
        <p className="btn" onClick={() => setVisablePopup(true)}>
          Справка
        </p>
        <p className="btn" onClick={() => setVisableTest(true)}>
          Тест
        </p>
      </div>
      {visablePopup && (
        <div className="blur">
          <div className="spravka" onClick={() => setVisablePopup(false)}>
            <div
              className="spravka__content"
              onClick={(e) => e.stopPropagation()}
            >
              {card[0].spravka}
            </div>
          </div>
        </div>
      )}
      {visableTest && (
        <div className="blur">
          <div className="test" onClick={() => setVisableTest(false)}>
            {showScore ? (
              <div
                className="test__content"
                onClick={(e) => e.stopPropagation()}
              >
                Правильных ответов {score}из {questions.length}
                <button onClick={refresh}>Попробовать еще раз</button>
              </div>
            ) : (
              <div
                className="test__content"
                onClick={(e) => e.stopPropagation()}
              >
                <p>{questions[currentQuestion].questionText}</p>
                <span>Вопрос {currentQuestion + 1}</span> / {questions.length}
                <div className="btn-test">
                  {questions[currentQuestion].answerOptions.map((item) => (
                    <button
                      onClick={() => handleAnswerOptionClick(item.isCorrect)}
                    >
                      {item.answerText}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Test;
