import Cookies from "js-cookie";
import { atom } from "recoil";

export const LngState = atom({
  key: "LngState",
  default: Cookies.get("i18next") || "en",
});
