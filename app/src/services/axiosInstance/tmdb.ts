import axios from 'axios';
import appConfigs from '../../config/appConfigs';

const tmdbAxiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

tmdbAxiosInstance.interceptors.request.use((config) => {
    console.log(config, appConfigs.tmdb.apiKey)
    config.params = {
        ...config.params,
        api_key: "02ab6f9337a26bd70f4a1ca34d52643d",
    }
    return config
})

export default tmdbAxiosInstance;
