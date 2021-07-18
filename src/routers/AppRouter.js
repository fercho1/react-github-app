import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { RepositoriesScreen } from '../components/RepositoriesScreen';
import { UserScreen } from '../components/UserScreen';
import { Navbar } from '../ui/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ UserScreen } />
                    <Route exact path="/user" component={ UserScreen } />
                    <Route exact path="/repositories" component={ RepositoriesScreen } />

                    <Redirect to="/user" />
                </Switch>
            </div>
        </Router>
    )
}
