import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import charDetails from './pages/charDetails';

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/luizalabsfront/" exact={true} component={Home} />
                    <Route path="/charDetails/:charId" component={charDetails} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Routes;