import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './router_components/Home';
import About from './router_components/About';
import Contact from './router_components/Contact';
import Error from './router_components/Error';
import Navigation from './router_components/Navigation';


export default class Router_App extends React.Component {
    render() {
        return (
            
            <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path = "/" component = {Home} exact />
                    <Route path = "/About" component = {About} />
                    <Route path = "/Contact" component = {Contact} />
                    <Route component = {Error} />

                    </Switch>
            </div>
            </BrowserRouter>
            
        )
    }
}
