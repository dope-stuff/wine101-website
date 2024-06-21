import axios from "axios";

export const navbarService = {
  getNavbar: () =>
    axios.get("/wine-navbar?populate=*"),
  getFooter: () =>
    axios.get("/wine-footer?populate=*"),
};
