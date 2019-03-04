import { combineReducers, Reducer } from 'redux';
import images from './images';
import { AppState } from './types';

const reducer: Reducer<AppState> = combineReducers<AppState>({
  images
});

export default reducer;
export * from './types';
