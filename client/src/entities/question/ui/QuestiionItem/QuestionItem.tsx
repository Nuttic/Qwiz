import React, { useState } from "react";
import styles from "./TaskItem.module.css";
import { Question } from "../../model";
import { useScore } from "@/app/scoreContext";

type Props = {
  question: Question;
};

export const QuestionItem: React.FC<Props> = ({ question }) => {

    const { incrementScore, decrementScore } = useScore();
  const [userAnswer, setUserAnswer] = useState("");
  const [answer, setAnswer] = useState<boolean | string>("");
  const [isAnswered, setIsAnswered] = useState(false); // новое состояние

  const compareAnswers = (userAnswer: string) => {
    setIsAnswered(true); // устанавливаем состояние как "ответ дан"
    if (
      userAnswer.trim() &&
      userAnswer.toLowerCase() === question.answer.toLowerCase()
    ) {
      setAnswer(true);
      incrementScore(question.points)
    } else {
      setAnswer(false);
     decrementScore(question.points)
    }
  };

  return (
    <>
      <img src={question.img} alt={question.title} style={{ width: 200 }} />
      <h4>{question.title}</h4>

      <input
        placeholder="Твой ответ"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={() => compareAnswers(userAnswer)}>Ответить</button>

      {/* Отображаем сообщение только если ответ был дан */}
      {isAnswered && (
        <>
          {answer === true ? (
            <div>Верно!</div>
          ) : (
            <div>Неправильно, правильный ответ - {question.answer}</div>
          )}
        </>
      )}
    </>
  );
};
