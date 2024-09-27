import { QuestionList } from "@/entities/question";

export type Topic = {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  Questions: QuestionList;
};

export type TopicList = Topic[];

export type TopicResponse = {
  topics: TopicList;
};

export type TopicOneResponse = {
  topic: Topic;
};
