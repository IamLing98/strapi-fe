import baseApiUrl from "@/utils/constants";
import axios from "axios";
import {
  setAdminInfo,
  setBanner,
  setLatestPosts,
  setListCategory,
  setPopularPosts,
  setPopularTopics,
} from "redux/reducers/indexReducer";

export async function fetchCategoryList(dispatch) {
  let data = await axios
    .get(`${baseApiUrl}/categories?_sort=id`)
    .then((res) => res?.data)
    .catch((err) => []);

  if (dispatch) {
    await dispatch(setListCategory(data));
  }
  return data;
}

export async function fetchBanner(dispatch) {
  let data = await axios
    .get(`${baseApiUrl}/banner`)
    .then((res) => res?.data)
    .catch((err) => []);
  dispatch(setBanner(data));
  return data;
}

export async function fetchLastestPosts(dispatch) {
  let data = await axios
    .get(`${baseApiUrl}/posts?_sort=published_at:DESC&_limit=50`)
    .then((res) => res?.data)
    .catch((err) => []);
  dispatch(setLatestPosts(data));
  return data;
}

export async function fetchPopularPost(dispatch) {
  let data = await axios
    .get(`${baseApiUrl}/posts?_sort=viewCount:DESC&_limit=5`)
    .then((res) => res?.data)
    .catch((err) => []);
  if (dispatch) {
    await dispatch(setPopularPosts(data));
  }
  return data;
}

export async function fetchAdminInfo(dispatch) {
  let data = await axios
    .get(`${baseApiUrl}/admin-info`)
    .then((res) => res?.data)
    .catch((err) => []);
  dispatch(setAdminInfo(data));
  return data;
}

export async function fetchPopularTopics(dispatch) {
  let data = await axios
    .get(`${baseApiUrl}/topics?_sort=viewCount:DESC&_limit=5`)
    .then((res) => res?.data)
    .catch((err) => []);

  if (dispatch) {
    await dispatch(setPopularTopics(data));
  }
  return data;
}
