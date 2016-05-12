import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/container/AppContainer';
import IndexPage from './components/container/IndexPageContainer';

export default function AppRouter({ store, history }) {

  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
      </Route>
    </Router>
  );
}

AppRouter.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
};

