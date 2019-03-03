import { SearchForm } from '../searchForm';
import React  from 'react';

import './Nav.scss';

interface IProps {
  onSearch: (value: string) => void,
}

export const Nav: React.FunctionComponent<IProps> = ({ onSearch }) => {
  console.log(onSearch);
  return <nav className={'page-nav'}>
    <div className='page-nav__container'>
      <SearchForm className={'page-nav__search-form'} onSubmit={onSearch}/>
    </div>
  </nav>
};


