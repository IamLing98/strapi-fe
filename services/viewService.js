import baseApiUrl from "@/utils/constants";
import axios from "axios";

export async function updateView(dispatch, collectionName, currentCount, id) {
  let data = await axios
    .put(`${baseApiUrl}/${collectionName}/${id}`, { viewCount: currentCount + 1 })
    .then((res) => res?.data)
    .catch((err) => []);
  console.log(data);
  // await dispatch(setLatestPosts(data));
  return data;
}
