import React from 'react';
import { Image } from '../../types/search-api';
import { GridItem } from './GridItem';
import './Grid.scss';
import { Button } from '../button';

interface IProps {
  items: Array<Image>;
  totalPages: number;
  total: number;
}

export class Grid extends React.PureComponent<IProps> {
  render() {
    return <div className={'grid'}>
      {
        this.props.items.map(item => {
          const {description, urls, likes} = item;
          return <GridItem className={'grid__item'} description={description} url={urls.small} likes={likes}/>;
        })
      }
      <Button>Show more</Button>
    </div>;
  }
}
