// src/RequiredApi/ContactApi.js

import API from "../api/axiosInstance";

export const sendContactMessage = async (data) => {
    const response = await API.post(
        "/api/contact/create",
        data
    );

    return response.data;
};