import React from 'react';
import { inject, observer } from 'mobx-react';

import { GridItem } from './GridItem';
import { ImagesStore } from '../../store';
import './Grid.scss';
import { IWithLoadingChildProps, withLoading } from '../../hocs/withLoading';
import { withLogger } from '../../hocs/withLogger';

interface Props extends IWithLoadingChildProps {
  imagesStore?: ImagesStore;
}

class Grid extends React.PureComponent<Props> {
  public static displayName = 'Grid';
  componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
    if (nextProps && nextProps.imagesStore!.items.length > 0) {
      this.props.onDataReceived!();
    }
  }

  render() {
    return <div className={ 'grid' }>
      <div className='grid__content'>
        {
          this.props.imagesStore!.items.map(item => {
            const { description, urls, likes, id } = item;
            return <GridItem
              className={ 'grid__item' }
              id={ id }
              description={ description }
              url={ urls.small }
              likes={ likes }/>;
          })
        }
      </div>
    </div>;
  }
}

const WithLoading = inject('imagesStore')(observer(withLogger(Grid)));

export { WithLoading as Grid };


