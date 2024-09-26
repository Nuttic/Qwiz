import { ROUTES } from "@/app/router/routes";
import { useAppSelector } from "@/shared/hooks/reduxHooks";
import React from "react";
import { Link } from "react-router-dom";

export function MainPage() {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div>
      {user ? (
        <>
          <h1>Привет, {user.name}!</h1>
          <h2>
            <Link to={ROUTES.TOPICS}>Нажми сюда</Link>, чтобы перейти к выбору темы
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
  );
}
