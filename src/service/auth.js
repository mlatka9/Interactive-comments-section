import axios from 'axios';

const baseURL = 'http://localhost:5000/api/v1/auth';

const login = async (username, password) => {
  const response = await axios.post(`${baseURL}/login`, { username, password });
  console.log("LOGGED")
  return response.data;
};

const register = async (username, password) => {
  await axios.post(`${baseURL}/register`, { username, password });
};

export default { login, register };
