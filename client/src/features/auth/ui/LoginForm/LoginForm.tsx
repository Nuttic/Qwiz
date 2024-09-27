import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
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

  const onFinish: FormProps<LogInFormData>["onFinish"] = async (
    values: LogInFormData
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
