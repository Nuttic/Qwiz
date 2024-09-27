import React, { useState } from "react";
import styles from "./QuestionItem.module.css";
import { Question } from "../../model";
import { Button } from "antd";

type Props = {
  question: Question;
};

export const QuestionItem: React.FC<Props> = ({ question }) => {
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
    } else {
      setAnswer(false);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.img}
          src={question.img}
          alt={question.title}
          // style={{ width: 200 }}
        />
        <h4 className={styles.question}>{question.title}</h4>

        <input
          className={styles.input}
          placeholder="Твой ответ"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <Button
          className={styles.button}
          onClick={() => compareAnswers(userAnswer)}
        >
          Ответить
        </Button>

        {/* Отображаем сообщение только если ответ был дан */}
        {isAnswered && (
          <>
            {answer === true ? (
              <div className={styles.goodAnswer}>Верно!</div>
            ) : (
              <div className={styles.badAnswer}>
                Неправильно, правильный ответ - {question.answer}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
