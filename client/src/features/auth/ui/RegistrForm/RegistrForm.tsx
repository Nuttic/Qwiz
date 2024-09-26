import styles from "./RegistrForm.module.css";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ROUTES } from '@/app/router/routes';
import { useNavigate } from 'react-router-dom';
import { selectUserLoading, useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import { registr } from "@/entities/user";
import { unwrapResult } from '@reduxjs/toolkit';

// /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  })
  .required();

export const RegistrForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectUserLoading);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInputs> = async ({
    name,
    email,
    password,
  }) => {
    try {
      const resultAction = await dispatch(registr({ name, email, password }));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusIcon = (fieldName: keyof IFormInputs) => {
    if (errors[fieldName]) {
      return <span className={styles.icon}>🔴</span>;
    }
    if (getValues()[fieldName] && !errors[fieldName]) {
      return <span className={styles.icon}>✅</span>;
    }
    return null;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input
          className={styles.input}
          placeholder="Enter your name"
          {...register("name")}
        />
        {getStatusIcon("name")}
      </label>
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      <label>
        Email:
        <input
          className={styles.input}
          placeholder="Enter your email"
          {...register("email")}
        />
        {getStatusIcon("email")}
      </label>
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      <label>
        Password:
        <input
          className={styles.password}
          placeholder="Enter your Password"
          {...register("password")}
        />
        {getStatusIcon("password")}
      </label>
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}
      <button
        className={styles.button}
        type="submit"
        disabled={!isValid || loading}
      >
        {loading ? "Signing Up..." : "Sign up"}
      </button>
    </form>
  );
};
