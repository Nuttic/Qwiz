import React from "react";
import { Link } from "react-router-dom";

export function MainPage() {
  //   const { user } = useAppSelector((state) => state.user);
  return (
    <>
      <h1>Добро пожаловать в Свою Игру!</h1>
      <h2>
        Чтобы начать играть,<Link to="/registr">зарегистрируйся</Link> или
        <Link to="/login">авторизуйся</Link>
      </h2>
    </>
  );
}

{/* <>
  <h1>Привет, {user.name}!</h1>
  <h2>
    <Link to="/topics">Нажми сюда</Link>, чтобы перейти к выбору темы
  </h2>
</>; */}
