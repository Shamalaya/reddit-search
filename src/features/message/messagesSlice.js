import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMessages } from "../../API";

const initialState = {
  messages: [],
  isLoading: false,
};

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  (values) => {
    return getMessages(values);
  }
);
const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMessages.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMessages.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.messages = action.payload;
    },
    [fetchMessages.pending]: (state) => {
      state.isLoading = false;
    },
  },
});

export default messagesSlice.reducer;
