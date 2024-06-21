import axios from "axios";

export const homeService = {
  get: () =>
    axios.get("/wine-home?populate=*"),
};
