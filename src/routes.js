import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import charDetails from './pages/charDetails';

class Routes extends React.Component {
  render() {
    return (
      <HashRouter basename="https://renanrobe.github.io">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/charDetails/:charId" component={charDetails} />
        </Switch>
      </HashRouter>
    );
  }
}
export default Routes;