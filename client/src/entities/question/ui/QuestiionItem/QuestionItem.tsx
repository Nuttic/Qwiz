import React, { useState } from "react";
import styles from "./QuestionItem.module.css";
import { Question } from "../../model";
import { Button } from "antd";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { updatePoints, addAnsweredQuestion } from "@/entities/user";

type Props = {
  question: Question;
};

export const QuestionItem: React.FC<Props> = ({ question }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [answer, setAnswer] = useState<boolean | string>("");
  const [isAnswered, setIsAnswered] = useState(false);

  const dispatch = useAppDispatch();

  const compareAnswers = (userAnswer: string) => {
    if (isAnswered) return; // Предотвращаем повторные ответы
    setIsAnswered(true);
    if (
      userAnswer.trim() &&
      userAnswer.toLowerCase() === question.answer.toLowerCase()
    ) {
      setAnswer(true);
      dispatch(updatePoints(question.points)); // Увеличиваем очки
    } else {
      setAnswer(false);
      dispatch(updatePoints(-question.points)); // Уменьшаем очки
    }
    dispatch(addAnsweredQuestion(question.id)); // Добавляем ID вопроса в список отвеченных
  };

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.img}
          src={question.img}
          alt={question.title}
        />
        <h4 className={styles.question}>{question.title}</h4>
        <input
          className={styles.input}
          placeholder="Твой ответ"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={isAnswered} // Блокируем поле ввода после ответа
        />
        <Button
          className={styles.button}
          onClick={() => compareAnswers(userAnswer)}
          disabled={isAnswered} // Блокируем кнопку после ответа
        >
          Ответить
        </Button>

        {isAnswered && (
          <>
            {answer === true ? (
              <div className={styles.goodAnswer}>Верно!</div>
            ) : (
              <div className={styles.badAnswer}>
                Неправильно, правильный ответ: {question.answer}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
