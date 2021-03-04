import axios from "axios";

export const initiateApp = async () =>
  axios
    .get("/initiateApp", {
      withCredentials: true,
    });

export default initiateApp;
