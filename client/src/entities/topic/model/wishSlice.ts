import { createSlice } from "@reduxjs/toolkit";
import { Topic, TopicList } from ".";
import { getAllTopics, getOneTopic } from "./topicThunks";
import { message } from "antd";

type TopicsState = {
  topics: TopicList | [];
  topic: Topic | null;
  error: string | null;
  loading: boolean;
};

const initialState: TopicsState = {
  topics: [],
  topic: null,
  error: null,
  loading: false,
};

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTopics.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTopics.fulfilled, (state, action) => {
        state.loading = false;
        state.topics = action.payload.topics;
        state.error = null;
      })
      .addCase(getAllTopics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to get topics";
        message.warning(action.payload?.message || "Failed to topics");
      })
      .addCase(getOneTopic.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneTopic.fulfilled, (state, action) => {
        state.loading = false;
        state.topic = action.payload.topic; // Сохраняем полученный топик
        state.error = null;
      })
      .addCase(getOneTopic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to get topic";
        message.warning(action.payload?.message || "Failed to get topic");
      });
  },
});

export default topicSlice.reducer;
