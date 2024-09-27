// import React, { useState } from "react";
// import styles from "./LoginForm.module.css";
// import { useNavigate } from "react-router-dom";
// import { ROUTES } from "@/app/router/routes";
// import {
//   selectUserLoading,
//   useAppDispatch,
//   useAppSelector,
// } from "@/shared/hooks/reduxHooks";
// import { login } from "@/entities/user";
// import { unwrapResult } from "@reduxjs/toolkit";

// export const LoginForm: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const loading = useAppSelector(selectUserLoading);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     try {
//       const resultAction = await dispatch(login({ email, password }));
//       unwrapResult(resultAction);
//       navigate(ROUTES.HOME);
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Почта:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//       <label>
//         Пароль:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <button type="submit" disabled={loading}>
//         {loading ? "Входим в систему..." : "Войти"}
//       </button>
//     </form>
//   );
// };

import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import {
  selectUserLoading,
  useAppDispatch,
  useAppSelector,
} from "@/shared/hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { login } from "@/entities/user";
import { unwrapResult } from "@reduxjs/toolkit";
import { ROUTES } from "@/app/router/routes";

type LogInFormData = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(selectUserLoading);

  const onFinish: FormProps<LogInFormData>["onFinish"] = async (
    values: FormProps
  ) => {
    try {
      const resultAction = await dispatch(login(values));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<LogInFormData>
        label="Почта"
        name="email"
        rules={[
          { required: true, message: "Введите вашу почту!" },
          {
            type: "email",
            message:
              "Введенный адрес электронной почты не является действительным!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<LogInFormData>
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Введите ваш пароль!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
