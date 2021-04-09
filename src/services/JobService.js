import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://cors.bridged.cc/https://jobs.github.com/positions/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getJobs() {
    return apiClient.get();
  },
  getJob(id) {
    return apiClient.get(id);
  },
};
