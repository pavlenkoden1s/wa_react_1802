import * as React from 'react';

export function withLogger<T = {}>(WrappedComponent: any): any {
  function WithLoggerComponent(props: T) {
    console.log(`Render called for component ${WrappedComponent.displayName}`);
    return <WrappedComponent {...props}/>
  }

  WithLoggerComponent.displayName = `withLogger${WrappedComponent.displayName}`;

  return WithLoggerComponent
}
