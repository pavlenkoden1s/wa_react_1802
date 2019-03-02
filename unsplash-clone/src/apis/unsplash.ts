import axios from 'axios';
import configs from '../configs';
import { SearchResponse } from '../types/search-api';
const request = axios.create({
  baseURL: configs.baseUrl,
  headers: {
    'Authorization': `Client-ID ${configs.clientId}`
  }
});

export default request

export const getItems = async (payload: {value: string, page: number}) => {
  const axiosConfig = {
    params: {
      query: payload.value,
      page: payload.page
    }
  };
  const  apiUrl = '/search/photos';
  debugger;
  const response = await request.get<SearchResponse>(apiUrl, axiosConfig);
  const { total_pages: totalPages, total, results: images } = response.data;
  return { totalPages, total, images }
};
