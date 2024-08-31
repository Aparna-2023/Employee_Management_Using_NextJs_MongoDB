import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

// Set up the base URL for your API
const baseURL = 'http://localhost:3000/api/' || ''

// Create an instance of axios
const axiosAPI = axios.create({
    baseURL,
});

// API request function
const apiRequest = async (method: string, url: string, auth: boolean, request?: unknown) => {
    const headers: Record<string, string> = {};
    if (auth) {
        const token = typeof window !== 'undefined' ? localStorage.getItem('AUTH_TOKEN') : null;
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
    }
    const config: AxiosRequestConfig = {
        method,
        url,
        data: request,
        headers
    };
    try {
        const response = await axiosAPI(config);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            if (axiosError.response && axiosError.response.status === 401) {
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('AUTH_TOKEN');
                    // Redirect to login page
                    /* window.location.href = '/login'*/;
                }
            }
            return Promise.reject(axiosError);
        }
        return Promise.reject(error);
    }
};

// Define specific methods for different HTTP requests
const get = (url: string, auth: boolean, request?: unknown) => apiRequest("get", url, auth, request);
const del = (url: string, auth: boolean, request?: unknown) => apiRequest("delete", url, auth, request);
const post = (url: string, auth: boolean, request?: unknown) => apiRequest("post", url, auth, request);
const put = (url: string, auth: boolean, request?: unknown) => apiRequest("put", url, auth, request);
const patch = (url: string, auth: boolean, request?: unknown) => apiRequest("patch", url, auth, request);

// Export the API object for easy usage
const API = {
    get,
    delete: del,
    post,
    put,
    patch
};

export default API;
