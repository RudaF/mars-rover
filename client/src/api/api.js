import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

const newRover = {
  previousCommands: [],
  currentPosition: { x: 0, y: 0 },
  currentDirection: "N",
};

export const createRover = () => api.post("/", newRover);
export const commandRover = (settings) => api.patch("/", settings);
export const getAllRovers = () => api.get("/");
export const resetRover = (id) => api.patch("/", id);
export const deleteRover = (id) => api.delete("/", id);

const apis = {
  createRover,
  commandRover,
  getAllRovers,
  resetRover,
  deleteRover,
};

export default apis;
