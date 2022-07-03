import baseApiUrl from "@/utils/constants";
import axios from "axios";

export const getDefault = async (id) => {
  let data = await axios
    .get(`${baseApiUrl}/posts/${id}`)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {});
  return data;
};

const postService = {
  getDefault: async (id) => await getDefault(id),
};
export default postService;
