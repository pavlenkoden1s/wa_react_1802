import * as React from 'react';

export interface IWithTooltipProps {
  tooltipText: string;
}

interface IWithTooltipState {
  isTooltipShown: boolean;
}

export function withTooltip<T extends IWithTooltipProps>(WrappedComponent: any) {
  return class extends React.PureComponent<T, IWithTooltipState> {
    public state = {
      isTooltipShown: false,
    };

    public render() {
      const { tooltipText, ...props } = this.props;
      const { isTooltipShown } = this.state;

      return <>
        <WrappedComponent onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} {...props}/>
        { (isTooltipShown) ? <div>{ tooltipText }</div> : null}
      </>;
    }

    private showTooltip = () => {
      console.log('Shown');
      this.setState(state => ({...state, isTooltipShown: true}));
    }

    private hideTooltip = () => {
      console.log('Hide');
      this.setState(state => ({...state, isTooltipShown: false}));
    }
  };
}
