import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const exceptedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (!exceptedError) {
    // Unexpected
    console.log("Logging the error", error);
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  // configure headers that applicable on http request
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
