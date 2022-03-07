import axios from 'axios';

const baseURL = `${process.env.REACT_APP_API_BASE}/api/v1/auth`;

const login = async (username, password) => {
  const response = await axios.post(`${baseURL}/login`, { username, password });
  return response.data;
};

const register = async (username, password) => {
  await axios.post(`${baseURL}/register`, { username, password });
};

export default { login, register };
