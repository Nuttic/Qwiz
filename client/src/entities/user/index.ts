import userReducer from "./model/userSlice";

export { UserServices } from "./api";
export type { User } from "./model";
export { refreshAccessToken, login, registr, logout } from "./model/userThunks";
export { userReducer };
export { updatePoints, addAnsweredQuestion } from "./model/userSlice";

//! СОРЯН РОСТИК
