import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components_with_router/Navigation';
import Home from './components_with_router/Home';
import Dashboard from './components_with_router/Dashboard';
import Profile from './components_with_router/Profile';
import GetPets from "./components_with_router/GetPets";
import AddPet from './components_with_router/AddPet';
import DeletePet from './components_with_router/DeletePet';
import Login from './components_with_router/Login';
import Register from './components_with_router/Register';
import Contact from './components_with_router/Contact';
import Logout from './components_with_router/Logout';
import Error from './components_with_router/Error';

import './App.css';

export default class App extends React.Component {
    render() {
        return(
            <div>
            <BrowserRouter>
            <div>
                {/* <Navigation /> */}
                <Switch>
                    <Route path = "/" component = {Home} exact  />
                    <Route path = "/GetPets" component = {GetPets} exact  />
                    <Route path = "/Dashboard" component = {Dashboard} exact  />
                    <Route path = "/AddPet" component = {AddPet} exact  />
                    <Route path = "/DeletePet" component = {DeletePet} exact  />
                    <Route path = "/Login" component = {Login} exact  />
                    <Route path = "/Logout" component = {Logout} exact  />
                    <Route path = "/Register" component = {Register} exact  />
                    <Route path = "/Profile" component = {Profile} exact />
                    <Route path = "/Contact" component = {Contact} exact />
                    <Route component = {Error} />
                    </Switch>
            </div>
            </BrowserRouter>
            </div>
        )
    }
}

