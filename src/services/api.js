import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get("https://dummyjson.com/users");
  return response.data.users;
};

export const fetchUsersById = async (id) => {
  const response = await axios.get(`https://dummyjson.com/users/${id}`);
  return response.data;
};

export const fetchPostsById = async (id) => {
  const response = await axios.get(`https://dummyjson.com/posts/user/${id}`);
  return response.data.posts;
};
