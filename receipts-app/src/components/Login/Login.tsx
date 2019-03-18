import * as React from 'react';
import { inject } from 'mobx-react';
import { AuthStore } from '../../store/Auth';
import { SyntheticEvent } from 'react';
import { OrderLine } from '../../store/OrderLine';

interface LoginProps {
  authStore?: AuthStore;
  orderStore?: OrderLine;
}

@inject('authStore')
@inject('orderStore')
export class Login extends React.Component<LoginProps> {
  public render() {
    return <form onSubmit={this.submit}>
      <input type='text'/>
      <input type='text'/>
      <button>Log in</button>
      {this.props.orderStore!.total}
    </form>
  }

  private submit = (e: SyntheticEvent) => {
    e.preventDefault();
    this.props.authStore!.setToken('HelloWorld');
  }
}
