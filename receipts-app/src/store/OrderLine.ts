import { action, computed, observable } from 'mobx';

export class OrderLine {
  @observable private _price = 0;
  @observable private _amount = 3;

  @computed get total() {
    return this._price * this._amount;
  }

  @action
  setPrice = (newPrice: number) => {
    this._price = newPrice;
  }
}
