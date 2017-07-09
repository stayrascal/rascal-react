import React from 'react';
import { Router, Route, IndexRoute, browseHistory } from 'react-router';

import App from './containers/App';
import FirstPage from './containers/FirstPage';
import SecondPage from './containers/SecondPage';
import NoMatch from './containers/NoMatch';

const Routes = props => {
    return (
        <Router history={browseHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={FirstPage} />
                <Route path="second" component={SecondPage} />
                <Route path="*" component={NoMatch} />
            </Route>
        </Router>
    )
};

export default Routes