import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fcfff5f46c484204ae2882af980644f5",
  },
});
