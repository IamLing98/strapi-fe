import baseApiUrl from "@/utils/constants";
import axios from "axios";

export const getDefault = async (id) => {
  let data = await axios
    .get(`${baseApiUrl}/categories/${id}`)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {});
  return data;
};

const categoryService = {
  getDefault: async (id) => await getDefault(id),
};
export default categoryService;
