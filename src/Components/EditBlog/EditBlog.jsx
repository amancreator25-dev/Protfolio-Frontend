import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlogApi from "../../RequiredApi/BlogApi";

function Edit() {
    const { blogId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        status: "draft",
    });

    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await BlogApi.getBlogById(blogId);

                const blog = response.data;

                setFormData({
                    title: blog.title,
                    content: blog.content,
                    status: blog.isPublished
                        ? "published"
                        : "draft",
                });
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [blogId]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setUpdating(true);

            await BlogApi.updateBlog(blogId, formData);

            alert("Blog Updated Successfully!");

            navigate("/myblogs");
        } catch (error) {
            console.error(error);
            alert("Failed to update blog.");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading...
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8">
                Edit Blog
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <div>
                    <label className="block mb-2 font-medium">
                        Title
                    </label>

                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-600"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Content
                    </label>

                    <textarea
                        name="content"
                        rows="12"
                        value={formData.content}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-600"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Status
                    </label>

                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3"
                    >
                        <option value="draft">
                            Draft
                        </option>

                        <option value="published">
                            Published
                        </option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={updating}
                    className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg"
                >
                    {updating
                        ? "Updating..."
                        : "Update Blog"}
                </button>
            </form>
        </div>
    );
}

export default Edit;