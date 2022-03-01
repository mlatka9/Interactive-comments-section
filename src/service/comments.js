import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/v1/comments';

const getAllComments = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addComment = async (comment) => {
  const response = await axios.post(baseUrl, comment);
  return response.data;
};

const updateComment = async (id, body) => {
  const response = await axios.patch(`${baseUrl}/${id}`, body);
  return response.data;
};

const deleteComment = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

export default { getAllComments, addComment, updateComment, deleteComment };
