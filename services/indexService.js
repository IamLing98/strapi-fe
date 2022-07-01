import baseApiUrl from "@/utils/constants";
import axios from "axios";
import { setBanner, setListCategory } from "redux/reducers/indexReducer";

export async function fetchCategoryList(dispatch) {
  let data = await axios
    .get(`${baseApiUrl}/categories`)
    .then((res) => res?.data)
    .catch((err) => []);
  console.log(data);
  await dispatch(setListCategory(data));
  return data;
}

export async function fetchBanner(dispatch) {
  let data = await axios
    .get(`${baseApiUrl}/banner`)
    .then((res) => res?.data)
    .catch((err) => []);
  console.log(data);
  await dispatch(setBanner(data));
  return data;
}
