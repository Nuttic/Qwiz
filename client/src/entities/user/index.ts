import userReducer from './model/userSlice'

export { UserService } from './api';
export type { User } from './model';
export { refreshAccessToken, login, registr, logout } from './model/userThunks';
export { userReducer }

//! СОРЯН РОСТИК