import React from 'react';

import { Grid } from './containers';
import { Nav } from './containers';
import './App.scss'

export class App extends React.Component<{}, {}> {

  public render() {
    return <div className={'page-container'}>
      <Nav />
      <Grid />
    </div>;
  }
}




