import React, { useState } from "react";
// import styles from './TaskList.module.css';
import { useAppSelector } from "@/shared/hooks/reduxHooks";
import { QuestionItem } from "@/entities/question/ui/QuestiionItem/QuestionItem";
import ModalWindow from "@/shared/ui/Modal/Modal";
import styles from "./TopicItem.module.css";

export const TopicItem: React.FC = () => {
  const { topic } = useAppSelector((state) => state.topics);
  const questions = topic?.Questions;

  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  const scores = [100, 200, 300, 400, 500];

  return (
    <div className={styles.container}>
      {questions?.map((quest, index) => (
        <div className={styles.que} key={quest.id}>
          <button
            className={styles.question}
            onClick={() => setActiveQuestionId(quest.id)}
          >
            {scores[index]}
          </button>

          <ModalWindow
            active={activeQuestionId === quest.id}
            setActive={() => setActiveQuestionId(null)}
          >
            <QuestionItem question={quest} />
          </ModalWindow>
        </div>
      ))}
    </div>
  );
};
