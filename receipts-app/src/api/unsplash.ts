import { Image, SearchResponse } from '../types'
import axios from 'axios';
import configs from '../../../unsplash-clone/src/configs';

export interface SearchItemsResponse {
  totalPages: number;
  total: number;
  items: Array<Image>
}

export interface IUnsplashApi {
  searchItems(payload: {value: string, page: number}): Promise<SearchItemsResponse>;
  auth(): any;
}

export class MockedImagesApi implements IUnsplashApi {
  public searchItems = async (payload: {value: string, page: number}): Promise<SearchItemsResponse>  => {
    const response = await Promise.resolve();
    return { totalPages: 0, total: 0, items: [] }
  };
  auth(): any {

  }
}

export class UnsplashApi implements IUnsplashApi{
  public searchItems = async (payload: {value: string, page: number}): Promise<SearchItemsResponse>  => {
    const axiosConfig = {
      headers: {
        'Authorization': `Client-ID 588745fe0494eda1c54354b97d7885c5f94a97a359ce835605acf2df6163ba8c`
      },
      params: {
        query: payload.value,
        page: payload.page
      }
    };

    const  apiUrl = 'https://api.unsplash.com/search/photos';
    const response = await axios.get<SearchResponse>(apiUrl, axiosConfig);
    const { total_pages: totalPages, total, results: items } = response.data;
    return { totalPages, total, items }
  };

  auth(): any {

  }

}
