import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader.jsx";
import createBlogApi from "../../RequiredApi/BlogApi";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await createBlogApi.getAllBlogs();

                console.log("Blogs Response:", response);

                setBlogs(response.data || []);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
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
                <div className="space-y-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="border rounded-lg p-6 shadow-sm bg-white"
                        >
                            <h2 className="text-2xl font-bold">
                                {blog.title}
                            </h2>

                            <div
                                className="mt-3 text-gray-700"
                                dangerouslySetInnerHTML={{
                                    __html: blog.content,
                                }}
                            />

                            <p className="mt-4 text-sm text-gray-500">
                                By {blog.owner?.fullname}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Blogs;