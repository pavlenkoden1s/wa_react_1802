import * as React from 'react';

export interface IWithLoadingState {
  isLoading: boolean;
}

export interface IWithLoadingChildProps {
  onDataReceived?(): void;
}

export function withLoading<T>(WrappedComponent: any) {
  return class extends React.Component<T, IWithLoadingState> {
    public state = {
      isLoading: true
    };

    public onDataReceived = () => {
      this.setState(state => ({...state, isLoading: false}));
    }

    public render() {
      const { isLoading } = this.state;
      return <>
        {isLoading ? 'Loading...' :  <WrappedComponent { ...this.props } onDataReceived={this.onDataReceived}/>}
      </>;
    }
  };
}
