import axios from "axios";
/* service api with axios */
export default axios.create({
  baseURL: `http://203.77.248.53:5000/api/v1/`,
  responseType: "json"
});