import API from "../api/axiosInstance";

class CreateBlogApi {
    async createBlog(data) {
        try {
            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("content", data.content);
            formData.append("status", data.status);

            if (data.featuredImage && data.featuredImage.length > 0) {
                formData.append("featuredImage", data.featuredImage[0]);
            }

            const response = await API.post(
                "/api/blog/create",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            return response.data;
        } catch (error) {
            console.error("Create Blog Error:", error);
            throw error;
        }
    }

    async getAllBlogs() {
        try {
            const response = await API.get("/api/blog/");
            return response.data;
        } catch (error) {
            console.error("Get Blogs Error:", error);
            throw error;
        }
    }

    async getBlogById(id) {
        try {
            const response = await API.get(`/api/blog/:${id}`);
            return response.data;
        } catch (error) {
            console.error("Get Blog Error:", error);
            throw error;
        }
    }

    async updateBlog(id, data) {
        try {
            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("content", data.content);
            formData.append("status", data.status);

            // if (data.featuredImage && data.featuredImage.length > 0) {
            //     formData.append("featuredImage", data.featuredImage[0]);
            // }

            const response = await API.patch(
                `/api/blog/:${id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            return response.data;
        } catch (error) {
            console.error("Update Blog Error:", error);
            throw error;
        }
    }

    async deleteBlog(id) {
        try {
            const response = await API.delete(`/api/blog/:/${id}`);
            return response.data;
        } catch (error) {
            console.error("Delete Blog Error:", error);
            throw error;
        }
    }
}

const createBlogApi = new CreateBlogApi();

export default createBlogApi;