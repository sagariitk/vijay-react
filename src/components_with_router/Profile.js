import React from 'react';
import { NavLink } from 'react-router-dom';


export default class Profile extends React.Component {
    state = {
        profile:  []
    }
    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <div className="header">
                    <div className="navbar">
                        <NavLink to="/"><strong style={{ fontSize: 20, padding:5 }}>Home</strong></NavLink>
                        <NavLink to="/Dashboard"><strong style={{ fontSize: 20, padding:5 }}>Dashboard</strong></NavLink>
                        <NavLink to="/Profile" onClick= {this.profile}><strong style={{ fontSize: 20, padding:5 }}>Profile</strong></NavLink>
                        <NavLink to="/GetPets"><strong style={{ fontSize: 20, padding:5 }}>GetPets</strong></NavLink>
                        <NavLink to="/AddPet"><strong style={{ fontSize: 20, padding:5 }}>AddPet</strong></NavLink>
                        <NavLink to="/" onClick= {this.logout} ><strong style={{ fontSize: 20, padding:5 }}>Logout</strong></NavLink>
                    </div>

                </div>   
                <div className="body">
                    <h1>Profile Componnet</h1>
                    <div >
                        <p >First Name : {localStorage.firstname}</p>
                        <p >Last Name: {localStorage.lastname}</p>
                        <p >User Name: {localStorage.username}</p>
                        <p >Mobile No: {localStorage.mobileno}</p>
                    </div> <br/>
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Vijay Yadav</span></div>      
            </div>
        )
    }
}

