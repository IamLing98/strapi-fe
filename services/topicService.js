import baseApiUrl from "@/utils/constants";
import axios from "axios";

export const getDefault = async (id) => {
  let data = await axios
    .get(`${baseApiUrl}/topics/${id}`)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {});
  return data;
};

const topicService = {
  getDefault: async (id) => await getDefault(id),
};
export default topicService;
