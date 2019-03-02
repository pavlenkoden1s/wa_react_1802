import { SearchForm } from '../searchForm';
import React, { SyntheticEvent } from 'react';

import './Nav.scss';
import { fetchItems } from '../../actions';
import { connect } from 'react-redux';

interface IProps {
  onSearch: (value: string) => void,
}

const Nav: React.FunctionComponent<IProps> = ({ onSearch }) => {
  return <nav className={'page-nav'}>
    <div className='page-nav__container'>
      <SearchForm className={'page-nav__search-form'} onSubmit={onSearch}/>
    </div>
  </nav>
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearch: (value: string) => dispatch(fetchItems({value, page: 1}))
  }
};

// connect = (stateToProps, dispatchToProps) => {
//   return (Component) => {
//     return <Component />
//   }
// }

const NavContainer = connect(null, mapDispatchToProps)(Nav);

export { NavContainer as Nav };


