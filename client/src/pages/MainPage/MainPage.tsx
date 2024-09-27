import { ROUTES } from "@/app/router/routes";
import { getAllTopics, getOneTopic } from "@/entities/topic/model/topicThunks";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function MainPage() {
  const { user } = useAppSelector((state) => state.user);
  const { topics, topic } = useAppSelector((state) => state.topics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTopics());
    dispatch(getOneTopic({ id: 1 }));
  }, [dispatch]);

  return (
    <>
      <div>
        {user ? (
          <>
            <h1>Привет, {user.name}!</h1>
            <h2>
              <Link to={ROUTES.TOPICS}>Нажми сюда</Link>, чтобы перейти к выбору
              темы
            </h2>
          </>
        ) : (
          <>
            <h1>Добро пожаловать в Свою Игру!</h1>
            <h2>
              Чтобы начать играть,
              <Link to={ROUTES.REGISTR}>зарегистрируйся</Link> или
              <Link to={ROUTES.LOGIN}>авторизуйся</Link>
            </h2>
          </>
        )}
      </div>
      <div>
        <h2>{topic?.title}</h2>
        {topic?.Questions.map((question) => (
          <div key={question.id}>{question.title}</div>
        ))}
      </div>
    </>
  );
}
