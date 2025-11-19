import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include token in all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const register = (userData: any) => {
  return api.post('/auth/register', userData);
};

export const login = (userData: any) => {
  return api.post('/auth/login', userData);
};

export const getUserStats = () => {
  return api.get('/surveys/stats');
};

export const updateSurveyStats = (surveyId: number, reward: number) => {
  return api.post('/surveys/complete', { surveyId, reward });
};

export default api;
