import axios from "axios";
/* service api with axios */
export default axios.create({
  baseURL: `http://172.168.1.33:5000/api/v1/`,
  responseType: "json"
});