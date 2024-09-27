// Navbar.tsx
import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { logout } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { Button } from "antd";

export const Navbar: React.FC = () => {
  const { user, points } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className={styles.container}>
        <span>
          <Button className={styles.button}>
            <Link to={ROUTES.HOME}>Главная</Link>
          </Button>
        </span>
        {user && (
          <>
            <span>
              <Button className={styles.button}>
                <Link to={ROUTES.TOPICS}>Темы</Link>
              </Button>
            </span>
            <span className={styles.points}>Очки: {points}</span>
          </>
        )}

        {user ? (
          <>
            <Button className={styles.button} onClick={handleLogout}>
              Выход
            </Button>
          </>
        ) : (
          <>
            <span>
              <Button className={styles.button}>
                <Link to={ROUTES.LOGIN}>Войти</Link>
              </Button>
            </span>
            <span>
              <Button className={styles.button}>
                <Link to={ROUTES.REGISTR}>Регистрация</Link>
              </Button>
            </span>
          </>
        )}
      </div>
    </>
  );
};
