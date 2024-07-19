import axios from 'axios';
const token = localStorage.getItem('token');
const axiosInstance = axios.create({
	// Configuration
	baseURL: 'http://localhost:5001/api',
	//timeout: 8000,
    headers: {
        'Authorization': `Bearer ${token}`,
      },
});

export default axiosInstance;