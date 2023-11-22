import axios from "axios";
const BASE_URL = "https://movieapi.cyberlearn.vn/api";

/**
 * axios
 * -axiosWithoutAuth: những api public
 * -axiosAuth: những api private - cần xác minh
 */

export const axiosWithoutAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 1000, //thời gian cho phép đợi 1 request API hoàn thành
  });