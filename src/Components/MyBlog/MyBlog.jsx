import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader.jsx";
import BlogApi from "../../RequiredApi/BlogApi.js";

function MyBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyBlogs = async () => {
            try {
                const response = await BlogApi.getMyBlogs();

                console.log("My Blogs:", response);

                setBlogs(response.data || []);
            } catch (error) {
                console.error("Error fetching my blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMyBlogs();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">
                My Blogs
            </h1>

            {blogs.length === 0 ? (
                <div className="text-center py-10">
                    <h2 className="text-2xl font-bold">
                        No Blogs Found
                    </h2>
                    <p className="text-gray-500 mt-2">
                        You haven't published any blogs yet.
                    </p>
                </div>
            ) : (
                <div className="space-y-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="border rounded-lg shadow-md p-6 bg-white"
                        >
                            <h2 className="text-2xl font-bold">
                                {blog.title}
                            </h2>

                            <div
                                className="mt-4 text-gray-700"
                                dangerouslySetInnerHTML={{
                                    __html: blog.content,
                                }}
                            />

                            <div className="flex justify-between items-center mt-6">
                                <span
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        blog.isPublished
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                    }`}
                                >
                                    {blog.isPublished
                                        ? "Published"
                                        : "Draft"}
                                </span>

                                <div className="space-x-3">
                                    <button
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyBlogs;