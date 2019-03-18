import React from 'react';
import { inject, observer } from 'mobx-react';

import { GridItem } from './GridItem';
import { ImagesStore } from '../../store';
import './Grid.scss';

interface Props {
  imagesStore?: ImagesStore;
}

@inject('imagesStore')
@observer
export class Grid extends React.PureComponent<Props> {
  render() {
    return <div className={'grid'}>
      <div className='grid__content'>
        {
          this.props.imagesStore!.items.map(item => {
            const {description, urls, likes, id} = item;
            return <GridItem
              className={'grid__item'}
              id={id}
              description={description}
              url={urls.small}
              likes={likes}/>;
          })
        }
      </div>
    </div>;
  }
}
