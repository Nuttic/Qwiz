import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import ModalWindow from "@/shared/ui/Modal/Modal";
import styles from "./TopicItem.module.css";
import { getOneTopic } from "@/entities/topic/model/topicThunks";
import { QuestionItem } from "@/entities/question/ui/QuestiionItem/QuestionItem";

interface TopicItemProps {
  id: number;
}

export const TopicItem: React.FC<TopicItemProps> = ({ id }) => {
  const topic = useAppSelector((state) => state.topics.topicsById[id]);
  const answeredQuestions = useAppSelector(
    (state) => state.user.answeredQuestions
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!topic) {
      dispatch(getOneTopic({ id }));
    }
  }, [dispatch, id, topic]);

  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  const scores = [100, 200, 300, 400, 500];

  if (!topic) {
    return <div>Загрузка...</div>;
  }

  const questions = topic.Questions;

  // Функция для проверки, был ли вопрос уже отвечен
  const isQuestionAnswered = (questionId: number) => {
    return answeredQuestions.includes(questionId);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{topic.title}</h1>
      {questions?.map((quest, index) => (
        <div className={styles.que} key={quest.id}>
          <button
            className={styles.question}
            onClick={() => setActiveQuestionId(quest.id)}
            disabled={isQuestionAnswered(quest.id)} // Делаем кнопку неактивной, если вопрос уже отвечен
          >
            {scores[index]}
          </button>

          <ModalWindow
            active={activeQuestionId === quest.id}
            setActive={() => setActiveQuestionId(null)} // Закрываем модальное окно при клике вне его
          >
            <QuestionItem question={quest} />
          </ModalWindow>
        </div>
      ))}
    </div>
  );
};

export default TopicItem;
