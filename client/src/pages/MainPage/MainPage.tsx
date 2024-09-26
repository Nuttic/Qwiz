import { ROUTES } from "@/app/router/routes";
import { useAppSelector } from "@/shared/hooks/reduxHooks";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../MainPage/MainPage.module.css";

export function MainPage() {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className={styles.container}>
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
            <Button className={styles.button}>
              <Link to={ROUTES.REGISTR}>зарегистрируйся</Link>
            </Button>
            или
            <Button className={styles.button}>
              <Link to={ROUTES.LOGIN}>авторизуйся</Link>
            </Button>
          </h2>
        </>
      )}
    </div>
  );
}
