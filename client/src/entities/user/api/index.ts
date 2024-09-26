import { axiosInstance, setAccessToken } from '@/shared/lib/axiosInstance';
import { AuthResponse, User } from '../model';

interface ApiResponse<T> {
  data: T;
  message: string;
  user:User;
  accessToken:string
}

export class UserService {
  //* Метод для получения текущего пользователя
  static async refreshAccessToken(): Promise<AuthResponse>{
    const { data, status } = await axiosInstance.get<ApiResponse<AuthResponse>>(
      '/tokens/refresh'
    )
    if ( status === 200 ) {
      setAccessToken(data.data.accessToken)
      return data.data
    } else {
      throw new Error(data.message)
    }
  } 

  //* Метод для входа пользователя
  static async login(
    email: string,
    password: string
  ): Promise<AuthResponse> {
    const {data, status} = await axiosInstance.post<ApiResponse<AuthResponse>>("/auth/login", {
      email,
      password
    })
    if (status === 200) {
      setAccessToken(data.accessToken)
      return data.user
    } else {
      throw new Error(data.message)
    }
  }

  //* Метод для регистрации пользователя
  static async registr(
    name: string,
    email: string,
    password: string,
  ): Promise<AuthResponse> {
    const {data, status} = await axiosInstance.post<ApiResponse<AuthResponse>>("/auth/registr", {
      name,
      email,
      password,
    })
    if ( status === 201) {
      setAccessToken(data.accessToken)
      return data.user
    } else {
      throw new Error(data.message)
    }
  }

  //* Метод для выхода пользователя
  static async logout(): Promise<void> {
    const {data, status} = await axiosInstance.get<ApiResponse<null>>('/auth/logout');
    if (status === 200) {
      setAccessToken('');
    } else {
      throw new Error(data.message)
    }
  }
}
