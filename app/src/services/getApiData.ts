import tmdbAxiosInstance from '../services/axiosInstance/tmdb';
import { AxiosRequestConfig } from 'axios';


export const GetTmdbDataAsJSON = async<TResult = unknown>(
    url: string,
    config: AxiosRequestConfig = {}
): Promise<TResult> => {
    console.log(url, config, "get api data")
    const response = await tmdbAxiosInstance.get<TResult>(url, {
        ...config,
        headers: {
            'Content-Type': 'application/json',
            ...config.headers,
        },
    });
    return response.data;
}
