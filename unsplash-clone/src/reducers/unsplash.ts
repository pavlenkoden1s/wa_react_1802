import { UnsplashActionTypes, UnsplashFetchAction } from '../actions';
import { Image } from '../types/search-api';

const INITIAL_STATE = {
  images: [],
  totalPages: 0,
  total: 0
};

interface UnsplashState {
  images: Array<Image>;
  totalPages: number;
  total: number;
}

const unsplash = (state: UnsplashState = INITIAL_STATE, action: UnsplashFetchAction) => {
  switch(action.type) {
    case UnsplashActionTypes.FETCH:
      return { ...state, ...action.payload};
    default:
      return state;
  }
}

export { unsplash }
