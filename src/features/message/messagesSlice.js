import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMessages } from "../../API";
// eslint-disable-next-line no-unused-vars
import dayjs from "dayjs";
const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  sort: "date-desc",
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
  reducers: {
    setSort: (state, action) => {
      console.log("sto qua");
      console.log(action);
      state.sort = action.payload;
    },
  },
  extraReducers: {
    [fetchMessages.pending]: (state) => {
      state.data = [];
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
export const selectSort = (state) => {
  return state.messages.sort;
};
export const selectSortedMessages = (state) => {
  let sortedMessages = [...state.messages.data];

  switch (state.messages.sort) {
    case "newer":
      sortedMessages.sort((a, b) =>
        dayjs(a.created_utc).isBefore(dayjs(b.created_utc))
      );
      break;
    case "older":
      sortedMessages.sort((a, b) =>
        dayjs(b.created_utc).isBefore(dayjs(a.created_utc))
      );
      break;
    case "popular":
      sortedMessages.sort((a, b) => b.score - a.score);
      break;
    case "unpopular":
      sortedMessages.sort((a, b) => a.score - b.score);
      break;
    default:
      break;
  }
  return sortedMessages;
};

export const { setSort } = messagesSlice.actions;

export default messagesSlice.reducer;
