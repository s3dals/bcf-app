import { configureStore } from "@reduxjs/toolkit";

import topicsReducer from './bcf-topics'
import markupsReducer from './bcf-markups'

const store = configureStore({
    reducer: { topics : topicsReducer, markups: markupsReducer } ,
  });
  
  export default store;