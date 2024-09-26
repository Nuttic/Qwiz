import React, { useState } from 'react';
import styles from "./LoginForm.module.css";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/app/router/routes';
import { selectUserLoading, useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import { login } from "@/entities/user";
import { unwrapResult } from '@reduxjs/toolkit';

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loading = useAppSelector(selectUserLoading);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const resultAction = await dispatch(login({ email, password }));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "Loging In..." : "Login"}
      </button>
    </form>
  );
};
