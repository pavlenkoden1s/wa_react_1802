import React, { SyntheticEvent } from 'react';

import { Field, InputTypes } from '../Field';
import classnames from 'classnames';

import './SearchForm.scss';
import { inject } from 'mobx-react';
import { ImagesStore } from '../../store';

interface IProps {
    imagesStore?: ImagesStore
    className?: string;
}

interface IState {
    value: string;
}

@inject('imagesStore')
export class SearchForm extends React.Component<IProps, IState>{
    public state = {
        value: ''
    };

    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { value } = this.state;
        this.props.imagesStore!.search(value);
    };

    private changeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        this.setState(state => ({...state, value}));
    };

    render() {
        const { value } = this.state;
        const classNames = classnames('search-form', this.props.className);

        return <form onSubmit={this.onSubmit} className={classNames}>
            <Field
                tooltipText={'Some cool field'}
                type={InputTypes.TEXT}
                value={value}
                placeholder={'Search'}
                onChange={this.changeHandler} />
        </form>;
    }
}
