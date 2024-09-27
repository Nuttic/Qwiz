import { createSlice } from "@reduxjs/toolkit";
import { Topic, TopicList } from ".";
import { getAllTopics, getOneTopic } from "./topicThunks";
import { message } from "antd";

type TopicsState = {
  topics: TopicList | [];
  topicsById: { [key: number]: Topic };
  error: string | null;
  loading: boolean;
};

const initialState: TopicsState = {
  topics: [],
  topicsById: {},
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

        // Сохраняем каждый топик в topicsById
        action.payload.topics.forEach((topic: Topic) => {
          state.topicsById[topic.id] = topic;
        });
      })
      .addCase(getAllTopics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Не удалось получить топики";
        message.warning(state.error);
      })
      .addCase(getOneTopic.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneTopic.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        const topic = action.payload.topic;
        // Сохраняем полученный топик в topicsById
        state.topicsById[topic.id] = topic;
      })
      .addCase(getOneTopic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Не удалось получить топик";
        message.warning(state.error);
      });
  },
});

export default topicSlice.reducer;
