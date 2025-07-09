import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c188c5142a93413d824dc59927f288c6",
  },
});
