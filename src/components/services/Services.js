import axios from "axios";
/* service api with axios */
export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  responseType: "json"
});