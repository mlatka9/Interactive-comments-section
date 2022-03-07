import axios from 'axios';
import { getFromLocalStorage } from '../helpers/index';

const baseURL = `${process.env.REACT_APP_API_BASE}/api/v1/comments`;

const extractToken = () => {
  return getFromLocalStorage('interactiveCommentsUser')?.token || null;
};

const getAllComments = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

const addComment = async (comment) => {
  const token = extractToken();
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(baseURL, comment, options);
  return response.data;
};

const updateComment = async (id, body) => {
  const token = extractToken();
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.patch(`${baseURL}/${id}`, body, options);
  return response.data;
};

const deleteComment = async (id) => {
  const token = extractToken();
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${baseURL}/${id}`, options);
  return response.data;
};

export default { getAllComments, addComment, updateComment, deleteComment };
