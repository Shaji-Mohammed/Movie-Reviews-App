import axios from "axios";

export default axios.create({
  baseURL: "https://7835-134-190-176-235.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
