import * as React from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
import { OrderLine } from './store/OrderLine';
import { Login } from './components/Login/Login';
import { Nav } from './components/Nav';
import { Grid } from './components/Grid';

interface IProps {
  order?: OrderLine
}

@inject('orderStore')
@observer
class ObserveredApp extends React.Component<any, any> {
  render() {
    console.log(this.props.order);
    return (
      <div className='App'>
        <Nav/>
        <Login />
        <Grid />
        <button onClick={() => this.props.order.setPrice(Math.ceil(Math.random()*100))}>CLICK</button>
        <br/>{ this.props.orderStore.total }
      </div>
    );
  }
}

export {ObserveredApp as App};

