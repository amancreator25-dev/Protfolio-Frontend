import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader.jsx";
import { getAllBlogs } from "../../RequiredApi/AuthBlogs.js";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllBlogs();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      {blogs.map((blog) => (
        <h1 key={blog._id}>{blog.title}</h1>
      ))}
    </div>
  );
}

export default Blogs;
