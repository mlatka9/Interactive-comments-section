import axios from 'axios';
import { getFromLocalStorage } from '../helpers/index';
const baseUrl = 'http://localhost:5000/api/v1/comments';

const extractToken = () => {
  return getFromLocalStorage('interactiveCommentsUser')?.token || null;
};

const getAllComments = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addComment = async (comment) => {
  const token = extractToken();
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(baseUrl, comment, options);
  return response.data;
};

const updateComment = async (id, body) => {
  const token = extractToken();
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.patch(`${baseUrl}/${id}`, body, options);
  return response.data;
};

const deleteComment = async (id) => {
  const token = extractToken();
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${baseUrl}/${id}`, options);
  return response.data;
};

export default { getAllComments, addComment, updateComment, deleteComment };
