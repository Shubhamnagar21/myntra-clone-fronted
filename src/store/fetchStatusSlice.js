import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // false: Pending, true: Done
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true; // Mutate directly
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true; // Mutate directly
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false; // Mutate directly
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
