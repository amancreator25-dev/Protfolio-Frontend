import API from "../api/axiosInstance";

class CreateBlogApi {
    async createBlog(data) {
        try {
            const response = await API.post("/api/blog/create", {
                title: data.title,
                content: data.content,
                status: data.status,
            });

            return response.data;
        } catch (error) {
            console.error("Create Blog Error:", error);
            throw error;
        }
    }

    async getAllBlogs() {
        try {
            const response = await API.get("/api/blog");
            return response.data;
        } catch (error) {
            console.error("Get Blogs Error:", error);
            throw error;
        }
    }

    async getBlogById(id) {
        try {
            const response = await API.get(`/api/blog/${id}`);
            return response.data;
        } catch (error) {
            console.error("Get Blog Error:", error);
            throw error;
        }
    }

    async updateBlog(id, data) {
        try {
            const response = await API.patch(`/api/blog/${id}`, {
                title: data.title,
                content: data.content,
                status: data.status,
            });

            return response.data;
        } catch (error) {
            console.error("Update Blog Error:", error);
            throw error;
        }
    }

    async deleteBlog(id) {
        try {
            const response = await API.delete(`/api/blog/${id}`);
            return response.data;
        } catch (error) {
            console.error("Delete Blog Error:", error);
            throw error;
        }
    }
}

const createBlogApi = new CreateBlogApi();

export default createBlogApi;