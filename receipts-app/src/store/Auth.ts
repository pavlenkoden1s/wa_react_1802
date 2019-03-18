import { action, computed, observable } from 'mobx';

export class AuthStore {
  @observable private _token: string = '';

  @computed
  get token(): string {
    return this._token;
  }

  @computed
  get isAuthenticated(): boolean {
    return !!this._token;
  }

  @action
  public setToken(newToken: string) {
    this._token = newToken;
  }
}
