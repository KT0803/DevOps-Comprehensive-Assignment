import axios from "axios";

// Axios instance
const API = axios.create({
  baseURL: "/api",
});

// Get all users
export const getUsers = async () => {
  const res = await API.get("/users");
  return res.data;
};

// Create user
export const createUser = async (userData) => {
  const res = await API.post("/users", userData);
  return res.data;
};

// Delete user
export const deleteUser = async (id) => {
  const res = await API.delete(`/users/${id}`);
  return res.data;
};

// Update user
export const updateUser = async (id, data) => {
  const res = await API.put(`/users/${id}`, data);
  return res.data;
};

export default API;