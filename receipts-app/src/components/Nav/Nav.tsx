import { SearchForm } from '../SearchForm';
import * as React  from 'react';

import './Nav.scss';
import { withLogger } from '../../hocs/withLogger';
import { IWithLoadingChildProps, withLoading } from '../../hocs/withLoading';

interface IProps extends IWithLoadingChildProps {
  title: string;
}

const Nav: React.FunctionComponent<IProps> = ({ children, title, onDataReceived }) => {
  return <nav className={'page-nav'}>
    <div className='page-nav__container'>
      <SearchForm className={'page-nav__search-form'}/>
      <ul className={'page-nav__menu'}>
        { children }
      </ul>
      {title}
      <button onClick={() => onDataReceived!()}></button>
    </div>
  </nav>
};

Nav.displayName = 'Nav';

const NavWithLogger = withLogger<IProps>(Nav);

export { NavWithLogger as Nav }


