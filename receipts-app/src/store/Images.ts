import { action, computed, observable } from 'mobx';
import { Image } from '../types';
import { IUnsplashApi } from '../api/unsplash';

export class ImagesStore {
  @observable.shallow private _items: Array<Image> = [];
  @observable private _page: number = 1;
  constructor(private _imagesApi: IUnsplashApi) {}

  @computed
  get items():  Array<Image> {
    return this._items;
  }

  @action
  setItems(items: Array<Image>) {
    this._items = items;
  }

  @action.bound
  public search = async (value: string) => {
    const searchData = await this._imagesApi.searchItems({value, page: this._page});
    this.setItems(searchData.items);
  }
}
