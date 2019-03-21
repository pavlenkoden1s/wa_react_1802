import React, { ButtonHTMLAttributes } from 'react';
import { IWithTooltipProps, withTooltip } from '../../hocs/withTooltip';

interface IButtonProps extends IWithTooltipProps, ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

const Button: React.FunctionComponent<IButtonProps> = ({title, ...props}) => {
  return <button className={'btn_default'} {...props}>
    {title}
  </button>
};

const ButtonWithTooltip = withTooltip<IButtonProps>(Button);

export {Button, ButtonWithTooltip}
