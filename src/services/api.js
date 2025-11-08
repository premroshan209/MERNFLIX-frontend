import axios from 'axios';

// Use Vite environment variable for API base URL when provided.
// On Vercel set VITE_API_BASE to your backend URL (for example: https://api.example.com/api)
// Fallback to a relative '/api' which works if you proxy requests or deploy backend under same domain.
const baseURL = import.meta.env.VITE_API_BASE || '/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor for API calls
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      // Token is invalid or expired
      const currentPath = window.location.pathname;
      
      // Don't redirect if already on login/signup page
      if (!['/login', '/signup'].includes(currentPath)) {
        alert('Your session has expired. Please login again.');
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
