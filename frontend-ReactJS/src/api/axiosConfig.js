import axios from "axios";

export default axios.create({
  baseURL: "https://01d4-134-41-13-2.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
