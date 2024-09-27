import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { QuestionItem } from "@/entities/question/ui/QuestiionItem/QuestionItem";
import ModalWindow from "@/shared/ui/Modal/Modal";
import { getOneTopic } from "@/entities/topic/model/topicThunks";

interface TopicItemProps {
  id: number;
}

export const TopicItem: React.FC<TopicItemProps> = ({ id }) => {
  const topic = useAppSelector((state) => state.topics.topicsById[id]);
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

  return (
    <div>
      <h1>{topic.title}</h1>
      {questions?.map((quest, index) => (
        <div key={quest.id}>
          <button onClick={() => setActiveQuestionId(quest.id)}>
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

export default TopicItem;
