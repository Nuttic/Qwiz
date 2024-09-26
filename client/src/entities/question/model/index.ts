export type Question = {
    id: number;
    title: string;
    topicId: number;
    answer: string;
    points: number;
    img: string;
    createdAt: Date;
    updatedAt: Date;
  };
  
  export type QuestionList = Question[];

  export type QuestionResponse = {
    question: Question
  };