import React, { useState } from 'react';
// import styles from './TaskList.module.css';
import { useAppSelector } from '@/shared/hooks/reduxHooks';
import { QuestionItem } from '@/entities/question/ui/QuestiionItem/QuestionItem';


export const TopicItem: React.FC = () => {
  const {topic}= useAppSelector(state => state.topics)
    const [active, setActive] = useState<boolean>(false)
  const questions = topic?.Questions
  
const isActive = () => {
    setActive(prev => !prev)
}
 

  return (
    <div>
      <div>Twerty</div>
      {questions?.map((quest) => (
        <div>
            {/* <p>{quest.title}</p> */}
        <button onClick={isActive}></button>
        <QuestionItem
          key={quest.id}
          question={quest}
        />
        </div>
      ))}
    </div>
  );
};