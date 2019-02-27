import React from 'react';
import { SearchForm } from './components/searchForm';
import axios from 'axios';

import './App.module.scss';
import { SearchResponse } from './types/search-api';
import { Grid } from './components/grid';
import { Button } from './components/button';

const apiUrl = 'https://api.unsplash.com/search/photos?page=1&query=${SEARCH_PARAM}&client_id=42f00e5ccf3bce6f62206323d3163d3b46ba5674d3196d610db0d2a08434ffd0';

export class App extends React.Component {
  state = {
    items: [],
    total: 0,
    totalPages: 0
  };

  private search = async (value: string) => {
    const response = await axios.get<SearchResponse>(apiUrl.replace('${SEARCH_PARAM}', value));
    const { total_pages: totalPages, total, results: items } = response.data;

    this.setState(state => ({...state, totalPages, total, items}));
  };

  public render() {
    return <div>
      <SearchForm onSubmit={this.search}/>
      <Button>
        <h2>Text</h2>
      </Button>
      <Grid {...this.state} />
    </div>;
  }
}




