import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {

    render() {
        return (
            <div>          
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                    {/* <h1>Navigation Component</h1> */}
                </div>
            </div>
        );
    }
}