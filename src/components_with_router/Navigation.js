import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {

    logout = async (e) =>{
        e.preventDefault();
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("firstname");
        localStorage.removeItem("lastname");
        localStorage.removeItem("username");
        localStorage.removeItem("mobileno");
        alert('you have been logged out');
        window.location = '/';
    }
    profile = async (e) =>{
        e.preventDefault();
        const username = localStorage.username;
        const api_call = await fetch(`http://localhost:1337/profile/${username}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.jwtToken
            }
        });
        const status = await api_call.status;
        if(status === 200) {
            const data = await api_call.json();
            localStorage.setItem('firstname', data.firstname);
            localStorage.setItem('lastname', data.lastname);
            localStorage.setItem('username', data.username);
            localStorage.setItem('mobileno', data.mobileno);
            console.log(localStorage);
            window.location = '/profile';
            
        }
        else {
            console.log(status);
            console.log('error');
        }
    }
    
    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <div className="header"></div>   
                <div className="body">
                    <NavLink to="/"><strong style={{ fontSize: 20, padding:5 }}>Home</strong></NavLink>
                    <NavLink to="/Profile" onClick= {this.profile}><strong style={{ fontSize: 20, padding:5 }}>Profile</strong></NavLink>
                    <NavLink to="/GetPets"><strong style={{ fontSize: 20, padding:5 }}>GetPets</strong></NavLink>
                    <NavLink to="/AddPet"><strong style={{ fontSize: 20, padding:5 }}>AddPet</strong></NavLink>
                    <NavLink to="/Login"><strong style={{ fontSize: 20, padding:5 }}>Login</strong></NavLink>
                    <NavLink to="/Register"><strong style={{ fontSize: 20, padding:5 }}>Register</strong></NavLink>
                    <NavLink to="/Contact"><strong style={{ fontSize: 20, padding:5 }}>Contact</strong></NavLink>
                    <NavLink to="#" onClick= {this.logout} ><strong style={{ fontSize: 20, padding:5 }}>Logout</strong></NavLink>
                </div>
            </div>
        );
    }
}