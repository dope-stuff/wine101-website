import axios from "axios";

export const homeService = {
  get: () =>
    axios.get("https://backend.petswayhome.co/api/wine-home?populate=*"),
};
