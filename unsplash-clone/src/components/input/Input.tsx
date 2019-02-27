import React, { SyntheticEvent, InputHTMLAttributes } from 'react';

export enum InputTypes {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
    PHONE = 'phone'
}

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    type: InputTypes;
}

export class Input extends React.PureComponent<IProps> {
    render() {
        const { type, ...restProps } = this.props;
        console.log(restProps);
        return <div className={'input'}>
            <input
                type={type}
                {...restProps}
                className={'input__native-input'}/>
        </div>
    }
}
