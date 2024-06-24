import axios from "axios";

export const workshopService = {
  get: (event_date: string) =>
    axios.get(
      `/workshops?filters[event_date][$gte]=${event_date}&pagination[limit]=1&pagination[withCount]=false`
    ),
};
