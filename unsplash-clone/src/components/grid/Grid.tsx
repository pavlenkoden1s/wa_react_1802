import React from 'react';
import { Image } from '../../types/search-api';
import { GridItem } from './GridItem';
import './Grid.scss';
import { Button } from '../button';
import { connect } from 'react-redux';

interface IProps {
  images: Array<Image>;
  totalPages: number;
  total: number;
}

class Grid extends React.PureComponent<IProps> {
  render() {
    const { total, images } = this.props;

    return <div className={'grid'}>
      <div className='grid__content'>
        {
          images.map(item => {
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
      <div>Found: {total} items</div>
    </div>;
  }
}

const mapStateToProps = (state: any) => {
  debugger;
  return {
    images: state.unsplash.images,
    totalPages: state.unsplash.totalPages,
    total: state.unsplash.total,
  }
};

const GridContainer = connect(mapStateToProps)(Grid);

export { GridContainer as Grid };
