import appConfigs from '../../config/appConfigs';
import axios from 'axios';

const tmdbAxiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

tmdbAxiosInstance.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        api_key: appConfigs.tmdb.apiKey
    }
    return config
})

export default tmdbAxiosInstance;
