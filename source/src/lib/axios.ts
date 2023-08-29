import ax from "axios";
import { API_BASE_URL } from "constants/domain";
import { storage } from "utils/storage";
import i18n from "./i18next";
let token = storage.getToken();
const axios = ax.create({
  baseURL: API_BASE_URL,
});
axios.interceptors.request.use(
  (config) => {
    if (!config.headers) return config;
    config.headers["Authorization"] = config.headers.Authorization ?? `Bearer ${token}`;
    config.headers["Accept-Language"] = i18n.language;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
window.addEventListener("tokenChanged", () => {
  token = storage.getToken();
});
axios.interceptors.response.use((res) => {
  if (res.status === 401) {
    storage.clearToken();
  }
  return res;
});
export default axios;
