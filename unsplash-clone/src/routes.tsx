import { Grid } from './containers';
import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { SignIn } from './containers/SignIn';

export const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    props: {
      title: 'Test'
    },
    Component: Grid
  },
  {
    title: 'Product',
    path: '/products/:productId',
    exact: true,
    props: {
      title: 'Test'
    },
    Component: (props: RouteChildrenProps<{productId: string}>) => {
      console.log(props.match);
      return <div>Product: {props.match!.params.productId}</div>
    }
  },
  {
    title: 'About',
    path: '/about',
    Component: () => <h1>Hello from about page</h1>
  },
  {
    title: 'Sign In',
    path: '/sign-in',
    Component: () => <SignIn />
  }
];
