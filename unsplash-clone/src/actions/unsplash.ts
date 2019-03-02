import { IAction } from '../types/action';
import { getItems } from '../apis/unsplash';

export enum UnsplashActionTypes {
  FETCH='@unsplash/fetch'
}

export type UnsplashFetchAction = IAction<UnsplashActionTypes, any>;

// Action creator
export const fetchItems = (payload: {value: string, page: number}): any => {
  debugger;
  return async (dispatch: any) => {
    const response = await getItems(payload);
    dispatch({
      type: UnsplashActionTypes.FETCH,
      payload: response
    });
  }
}
