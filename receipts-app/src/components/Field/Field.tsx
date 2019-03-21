import React, { InputHTMLAttributes } from 'react';

import './Field.scss';
import { IWithTooltipProps, withTooltip } from '../../hocs/withTooltip';

export enum InputTypes {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
    PHONE = 'phone'
}

interface IProps extends InputHTMLAttributes<HTMLInputElement>, IWithTooltipProps {
    type: InputTypes;
}

class Field extends React.PureComponent<IProps> {
    render() {
        const { type, ...restProps } = this.props;
        console.log(restProps);
        return <div className={'field'}>
            <input
                type={type}
                {...restProps}
                className={'field__native-input'}/>
        </div>
    }
}

const FieldWithTooltip = withTooltip<IProps>(Field);

export {FieldWithTooltip as Field}
