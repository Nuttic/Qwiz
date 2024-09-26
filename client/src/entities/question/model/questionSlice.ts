import { createSlice } from "@reduxjs/toolkit";
import { Question } from '.'
import { getOneQuestion } from "./questionThunks";
import {message} from 'antd'

type QuestionState = {
    question:  Question| null;
    error: string | null;
    loading:boolean;
}


const initialState: QuestionState = { 
    question: null,
    error: null,
    loading: false
}



const topicSlice = createSlice({
    name: 'topic',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOneQuestion.pending, (state) => {
            state.loading = true
        })
        .addCase(getOneQuestion.fulfilled, (state, action) => {
            state.loading = false
            state.question = action.payload.question
            state.error = null
        })
        .addCase(getOneQuestion.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || 'Failed to get question';
            message.warning(action.payload?.message || 'Failed to question');
        })
     

    }})

    export default topicSlice.reducer