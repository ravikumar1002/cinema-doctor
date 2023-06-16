import axios from 'axios';
import appConfigs from '../../config/appConfigs';

const tmdbAxiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

tmdbAxiosInstance.interceptors.request.use((config) => {
    console.log(config, appConfigs.tmdb.apiKey)
    config.params = {
        ...config.params,
        api_key: appConfigs.tmdb.apiKey
    }
    return config
})

export default tmdbAxiosInstance;
