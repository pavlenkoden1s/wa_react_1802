import { SearchForm } from '../SearchForm';
import * as React  from 'react';

import './Nav.scss';

interface IProps {}

export const Nav: React.FunctionComponent<IProps> = ({ children }) => {
  return <nav className={'page-nav'}>
    <div className='page-nav__container'>
      <SearchForm className={'page-nav__search-form'}/>
      <ul className={'page-nav__menu'}>
        { children }
      </ul>
    </div>
  </nav>
};


