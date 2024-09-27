import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import {
  selectUserLoading,
  useAppDispatch,
  useAppSelector,
} from "@/shared/hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { registr } from "@/entities/user";
import { unwrapResult } from "@reduxjs/toolkit";
import { ROUTES } from "@/app/router/routes";

type RegistrFormData = {
  name: string;
  email: string;
  password: string;
};

export const RegistrForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(selectUserLoading);

  const onFinish: FormProps<RegistrFormData>["onFinish"] = async (
    values: FormProps
  ) => {
    try {
      const resultAction = await dispatch(registr(values));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Registr failed:", error);
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
      <Form.Item<RegistrFormData>
        label="Имя"
        name="name"
        rules={[{ required: true, message: "Введите ваше имя!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<RegistrFormData>
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
      <Form.Item<RegistrFormData>
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
