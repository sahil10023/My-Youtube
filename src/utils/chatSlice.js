import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constents";

const chatSlice = createSlice({
    name: "Chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.length == OFFSET_LIVE_CHAT && state.messages.shift();
            state.messages.push(action.payload);
        }
    }
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;