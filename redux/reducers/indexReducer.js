import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import baseApiUrl from "@/utils/constants";

const initialState = {
  loading: true,
  categoryList: [],
  banner: {},
  latestPosts: [],
  adminInfo: {},
  popularTopics: [],
  popularPosts: [],
  showNav: true,
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
    setLatestPosts: (state, action) => {
      return { ...state, latestPosts: action?.payload };
    },
    setAdminInfo: (state, action) => {
      return { ...state, adminInfo: action?.payload };
    },
    setPopularTopics: (state, action) => {
      return { ...state, popularTopics: action?.payload };
    },
    setPopularPosts: (state, action) => {
      return { ...state, popularPosts: action?.payload };
    },
    setLoading: (state, action) => {
      return { ...state, loading: action?.payload };
    },
    setShowNav: (state, action) => {
      return { ...state, showNav: action?.payload };
    },
  },
  extraReducers: {},
});

export const {
  setListCategory,
  setBanner,
  setLatestPosts,
  setAdminInfo,
  setPopularTopics,
  setLoading,
  setShowNav,
  setPopularPosts,
} = slice.actions;

export default slice.reducer;
