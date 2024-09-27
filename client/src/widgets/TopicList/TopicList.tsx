import React from "react";
import { TopicItem } from "../TopicItem/TopicItem";

export const TopicList: React.FC = () => {
  return (
    <div>
      <TopicItem id={1} />
      <TopicItem id={2} />
      <TopicItem id={3} />
    </div>
  );
};
