import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://hybrid.srishticampus.in:4001/community_connect_tvm_api/" || "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

