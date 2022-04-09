import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMessages } from "../../API";

const initialState = {
  data: null,
  isLoading: false,
  isError: false,
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
      state.isLoading = false;
      state.data = action.payload.data;
    },
    [fetchMessages.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default messagesSlice.reducer;
