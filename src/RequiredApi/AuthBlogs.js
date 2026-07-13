// src/RequiredApi/AuthBlogs.js
import axios from "axios"; // your shared axios config

// 🔹 Get all blogs (public or protected depending on backend)
export const getAllBlogs = async () => {
  const res = await axios.get("/api/v1/blogs");
  return res.data;
};

// 🔹 Get single blog
export const getBlogById = async (id) => {
  const res = await axios.get(`/api/v1/blogs/${id}`);
  return res.data;
};

// 🔹 Create blog (AUTH REQUIRED)
export const createBlog = async (blogData) => {
  const res = await axios.post("/api/v1/blogs", blogData);
  return res.data;
};

// 🔹 Update blog (AUTH + ROLE CHECK)
export const updateBlog = async (id, blogData) => {
  const res = await axios.put(`/api/v1/blogs/${id}`, blogData);
  return res.data;
};

// 🔹 Delete blog (AUTH + ROLE CHECK)
export const deleteBlog = async (id) => {
  const res = await axios.delete(`/api/v1/blogs/${id}`);
  return res.data;
};
