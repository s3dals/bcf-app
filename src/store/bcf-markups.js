import { createSlice } from "@reduxjs/toolkit";

const initialTopicsState = {  bcfMarkup: []};

const markupsSlice = createSlice({
    name: "markups",
    initialState: initialTopicsState,
    reducers: {
        addbcfMarkup(state, action) {
        state.bcfMarkup.push(action.payload);
        // state.bcfData = action.payload;
      },
      clearbcfMarkup(state) {
        state.bcfMarkup.length = 0;
        // state.bcfData = action.payload;
      },
      replacebcfMarkup(state, action) {
        state.bcfMarkup = action.payload;
        // state.bcfMarkup = action.payload;
      },
      // addbcfMarkup(state, action) {
      //   state.bcfMarkup.push(action.payload);
      // },
    },
  });

export const markupsActions = markupsSlice.actions;

export default markupsSlice.reducer;