import { getAllTopics } from "@/entities/topic/model/topicThunks";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import React, { useEffect } from "react";
export const TopicList: React.FC = () => {
  const { topics } = useAppSelector((state) => state.topics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTopics());
  }, [dispatch]);

  return (
    <div>
      {topics &&
        topics.map((topic) => (
          <div key={topic.id}>
            <h2>{topic.title}</h2>
          </div>
        ))}
    </div>
  );
};
