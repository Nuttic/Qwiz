import { createSlice } from "@reduxjs/toolkit";
import { TopicList} from '.'
import { getAllTopics } from "./topicThunks";
import {message} from 'antd'

type TopicsState = {
    topics: TopicList | [];
    error: string | null;
    loading:boolean;
}


const initialState: TopicsState = { 
    topics: [],
    error: null,
    loading: false
}



const topicSlice = createSlice({
    name: 'topic',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllTopics.pending, (state) => {
            state.loading = true
        })
        .addCase(getAllTopics.fulfilled, (state, action) => {
            state.loading = false
            state.topics = action.payload
            state.error = null
        })
        .addCase(getAllTopics.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || 'Failed to get topics';
            message.warning(action.payload?.message || 'Failed to topics');
        })
     

    }})

    export default topicSlice.reducer