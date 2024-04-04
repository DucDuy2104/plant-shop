import axios from 'axios';

const AxiosInstance = (contentType = 'application/json') => {
    const ipV4Home = '192.168.1.25'
    const ipV4School = '172.16.74.120'
    const axiosInstance = axios.create({
        baseURL: `http://${ipV4School}:7000/`
    });

    axiosInstance.interceptors.request.use(
        async (config) => {
            const token = '';
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;