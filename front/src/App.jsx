import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PeliUnica from './containers/PeliUnica';
import Peliculas from './containers/Peliculas';
import NavbarContainer from './containers/NavbarContainer';
import User from './containers/User';
import Users from './containers/Users';
import Profile from './containers/Profile';

import 'bootswatch/dist/superhero/bootstrap.min.css';

export default class App extends React.Component {
    render() {
        return (
            <div >
                <NavbarContainer />
                <div >
                    <Switch>
                        <Route exact path='/movies' component={Peliculas}></Route>
                        <Route exact path='/movies/:id' component={PeliUnica}></Route>
                        <Route exact path='/login' component={User}></Route>
                        <Route exact path='/register' component={Users}></Route>
                        <Route exact path='/profile' component={Profile} ></Route> 
                        <Route exact path='/logout' to='/movies' ></Route> 
                        <Redirect from='/' to='/movies'></Redirect>
                    </Switch>
                </div>
            </div>
        );}};

