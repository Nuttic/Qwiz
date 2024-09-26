import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { QuestionService } from "../api/";
import { QuestionResponse } from "./index";


type RejectValue = {
    message:string;
}

export const getOneQuestion = createAsyncThunk< QuestionResponse, {topicId: number, id: number}, { rejectValue: RejectValue }>('topic/getOne', async({id, topicId}, {rejectWithValue}) => {
    try {
        return await QuestionService.getQuestion(topicId, id)
    } catch (error) {
        const err = error as AxiosError<{ message: string }>; 
        return rejectWithValue({
          message: err.response?.data.message || err.message,
        })
    }
})