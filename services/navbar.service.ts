import axios from "axios";

export const navbarService = {
  getNavbar: () =>
    axios.get("https://backend.petswayhome.co/api/wine-navbar?populate=*"),
  getFooter: () =>
    axios.get("https://backend.petswayhome.co/api/wine-footer?populate=*"),
};
