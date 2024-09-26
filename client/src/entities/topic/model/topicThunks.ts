import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { TopicService } from "../api/";
import { Topic, TopicList, TopicResponse } from "./index";


type RejectValue = {
    message:string;
}

export const getAllTopics = createAsyncThunk< TopicList, void, { rejectValue: RejectValue }>('topic/getAll', async(_, {rejectWithValue} ) => {
    try {
        return await TopicService.getAllTopics()
    } catch (error) {
        const err = error as AxiosError<{ message: string }>; 
        return rejectWithValue({
          message: err.response?.data.message || err.message,
        })
    }
})

export const getOneTopic = createAsyncThunk< TopicResponse, {id: number}, { rejectValue: RejectValue }>('topic/getOne', async({id}, {rejectWithValue}) => {
    try {
        return await TopicService.getTopic(id)
    } catch (error) {
        const err = error as AxiosError<{ message: string }>; 
        return rejectWithValue({
          message: err.response?.data.message || err.message,
        })
    }
})