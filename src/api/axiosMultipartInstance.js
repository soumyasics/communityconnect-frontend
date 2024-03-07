import axios from "axios";

const axiosMultipartInstance = axios.create({
  baseURL: "http://hybrid.srishticampus.in/community_connect_tvm_api/" || "http://localhost:5000/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
export default axiosMultipartInstance;
