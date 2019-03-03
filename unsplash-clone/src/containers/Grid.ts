import { connect } from 'react-redux';

import { getImages, getIsLoading } from '../store/images';
import { AppState } from '../store';
import { Grid } from '../components/grid';
import { Image } from '../types/imagesApi';

export interface IGridOwnProps {}

export interface IGridStateProps {
  images: Array<Image>;
  isLoading: boolean;
}

export interface IGridDispatchProps {}

const mapStateToProps: any = (state: AppState): IGridStateProps  => {
  return {
    images: getImages(state),
    isLoading: getIsLoading(state),
  };
};

const GridContainer = connect<IGridStateProps, IGridDispatchProps, IGridOwnProps>(mapStateToProps)(Grid);

export { GridContainer as Grid };
