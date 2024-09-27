import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/entities/user";
import { topicReducer } from "@/entities/topic";

const store = configureStore({
  reducer: {
    user: userReducer,
    topics: topicReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
