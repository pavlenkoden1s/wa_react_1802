import * as React from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
import { OrderLine } from './store/OrderLine';
import { Login } from './components/Login/Login';
import { Nav } from './components/Nav';
import { Grid } from './components/Grid';
import { ButtonWithTooltip } from './components/Button/Button';

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
        <Nav title={'Hello'}/>
        <Grid />
        <ButtonWithTooltip title={'Hello world'} tooltipText={'Hello wtooltip'}/>
      </div>
    );
  }
}

export {ObserveredApp as App};

