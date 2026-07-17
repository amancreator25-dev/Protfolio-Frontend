import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader.jsx";
import { getAllBlogs } from "../../RequiredApi/AuthBlogs.js";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getAllBlogs();

        setBlogs(response.data || []);
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
    <>
        {blogs.length === 0 ? (
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold">
                    No Blogs Yet
                </h1>
                <p className="text-gray-500 mt-2">
                    Be the first one to publish a blog.
                </p>
            </div>
        ) : (
            <div>
                {blogs.map((blog) => (
                    <h1 key={blog._id}>
                        {blog.title}
                    </h1>
                ))}
            </div>
        )}
    </>
  );

}

export default Blogs;