import React, { SyntheticEvent } from 'react';

import { Input, InputTypes } from '../input';
import classnames from 'classnames';

interface IProps {
    onSubmit: (value: string) => void;
}

interface IState {
    value: string;
}

export class SearchForm extends React.Component<IProps, IState>{
    public state = {
        value: '1239'
    };

    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    };

    private changeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        this.setState(state => ({...state, value}));
    };

    private onFocus = (e: SyntheticEvent<HTMLInputElement>) => {
        console.log('Focused', e);
    };

    render() {
        const { value } = this.state;
        const classNames = classnames('search-form');

        return <form onSubmit={this.onSubmit} className={classNames}>
            <Input
                type={InputTypes.TEXT}
                value={value}
                onFocus={this.onFocus}
                onChange={this.changeHandler} />
        </form>;
    }
}
