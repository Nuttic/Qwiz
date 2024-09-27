import { axiosInstance, setAccessToken } from "@/shared/lib/axiosInstance";
import { User } from "../model";

export class UserServices {
  // * Метод для получения текущего пользователя
  static async refreshAccessToken(): Promise<{
    accessToken: string;
    user: User;
  }> {
    const response = await axiosInstance.get("/tokens/refresh");
    setAccessToken(response.data.accessToken);
    return response.data;
  }

  // * Метод для входа пользователя
  static async login(
    email: string,
    password: string
  ): Promise<{ accessToken: string; user: User }> {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    setAccessToken(response.data.accessToken);
    return response.data;
  }

  // * Метод для регистрации пользователя
  static async registr(
    name: string,
    email: string,
    password: string,
  ): Promise<{ accessToken: string; user: User }> {
    const response = await axiosInstance.post("/auth/registr", {
      name,
      email,
      password,
    });
    setAccessToken(response.data.accessToken);
    return response.data;
  }

  // * Метод для выхода пользователя
  static async logout(): Promise<void> {
    await axiosInstance.delete("/auth/logout");
    setAccessToken("");
  }
}
