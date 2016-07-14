import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import MainStore from './containers/MainStore';

//<NotFoundRoute name="notfound" handler={NotFound}/>
export default (
  <Route
    path="/"
    component={App}>
    <IndexRoute component={MainStore} />
  </Route>
);
