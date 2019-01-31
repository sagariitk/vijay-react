import React from 'react';
import { NavLink } from 'react-router-dom';


export default class Logout extends React.Component {
    
    logout = async (e) =>{
        e.preventDefault();
        localStorage.removeItem("jwtToken");
        alert('you have been logged out');
        window.location = '/login';
    }
    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <div className="header">
                    <h1>Logout Componnet</h1>
                </div>   
                <div className="body">
                    <button onClick = {this.logout}>Logout</button>
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Vijay Yadav</span></div>      
            </div>
        )
    }
}

