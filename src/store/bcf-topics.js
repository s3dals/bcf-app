import { createSlice } from "@reduxjs/toolkit";

const initialTopicsState = {  bcfData: []};

const topicsSlice = createSlice({
    name: "topics",
    initialState: initialTopicsState,
    reducers: {
      addbcfData(state, action) {
        state.bcfData.push(action.payload);
        // state.bcfData = action.payload;
      },
      clearbcfData(state) {
        state.bcfData.length = 0;
        // state.bcfData = action.payload;
      },
      replacebcfData(state, action) {
        state.bcfData = action.payload;
        // state.bcfMarkup = action.payload;
      },
      // addbcfMarkup(state, action) {
      //   state.bcfMarkup.push(action.payload);
      // },
    },
  });

export const topicsActions = topicsSlice.actions;

export default topicsSlice.reducer;