import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import baseApiUrl from "@/utils/constants";

const initialState = {
  categoryList: [],
  banner: {},
};

const slice = createSlice({
  name: "indexSlice",
  initialState,
  reducers: {
    setListCategory: (state, action) => {
      return { ...state, categoryList: action?.payload };
    },
    setBanner: (state, action) => {
      return { ...state, banner: action?.payload };
    },
  },
  extraReducers: {},
});

export const { setListCategory, setBanner } = slice.actions;

export default slice.reducer;
