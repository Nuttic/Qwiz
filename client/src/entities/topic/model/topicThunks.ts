import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { TopicService } from "../api/";
import { TopicOneResponse, TopicResponse } from "./index";

type RejectValue = {
  message: string;
};

export const getAllTopics = createAsyncThunk<
  TopicResponse,
  void,
  { rejectValue: RejectValue }
>("topic/getAll", async (_, { rejectWithValue }) => {
  try {
    const response = await TopicService.getAllTopics();
    return { topics: response };
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const getOneTopic = createAsyncThunk<
  TopicOneResponse,
  { id: number },
  { rejectValue: RejectValue }
>("topic/getOne", async ({ id }, { rejectWithValue }) => {
  try {
    const topic = await TopicService.getTopic(id);
    return { topic };
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
