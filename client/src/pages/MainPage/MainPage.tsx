import { ROUTES } from "@/app/router/routes";

import { Button } from "antd";
import React from "react";
import { getAllTopics, getOneTopic } from "@/entities/topic/model/topicThunks";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../MainPage/MainPage.module.css";

export function MainPage() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTopics());
    dispatch(getOneTopic({ id: 1 }));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {user ? (
        <>
          <h1 className={styles.title}>Привет, {user.name}!</h1>
          <Button className={styles.button}>
            <Link to={ROUTES.TOPICS}>Нажми сюда</Link>
          </Button>
          <h2 className={styles.message}>↑</h2>
          <h2 className={styles.message}>чтобы перейти к выбору темы</h2>
        </>
      ) : (
        <>
          <h1>Добро пожаловать в Свою Игру!</h1>
          <h2>
            Чтобы начать играть,
            <Button className={styles.button}>
              <Link to={ROUTES.REGISTR}>Зарегистрируйся</Link>
            </Button>
            или
            <Button className={styles.button}>
              <Link to={ROUTES.LOGIN}>Авторизуйся</Link>
            </Button>
          </h2>
        </>
      )}
    </div>
  );
}
