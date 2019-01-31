import React from 'react';
import { NavLink } from 'react-router-dom';


export default class AddPet extends React.Component {
    addPet = async (e) =>{
        e.preventDefault();
        const body = {
            pet_breed : e.target.elements.pet_breed.value,
            owner_name : e.target.elements.owner_name.value,
            owner_contact_no : e.target.elements.owner_contact_no.value,
            pet_description : e.target.elements.pet_description.value
        }
        if(!e.target.elements.pet_breed.value || !e.target.elements.owner_name.value){
            console.log('pet breed or owner name can not be blank');
            alert('pet breed or owner name can not be blank');
        }
        else {
            const api_call = await fetch(`http://127.0.0.1:1337/pets`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.jwtToken
            }
            });
            const status = await api_call.status;
            console.log(status);
            if(status === 200) {
                console.log('pet added to database');
                alert('pet added to database');
                window.location = '/addpet';
            }
            else if(status === 403) {
                console.log('not authenticated please login');
                alert('not authenticated please login');
                window.location = '/login';    
            }
            else {
                console.log('could not addd the pet to database');
                alert('could not addd the pet to database');
            }
        }
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
                    <h1>Add a New Pet</h1>
                    <form  onSubmit={this.addPet}>
                        <input type="text" name="pet_breed" placeholder="Pet Breed"></input><br></br>
                        <input type="text" name="owner_name" placeholder="Owner Name"></input><br></br>
                        <input type="text" name="owner_contact_no" placeholder="Owner Contact No"></input><br></br>
                        <input type="text" name="pet_description" placeholder="Pet Description"></input><br></br>
                        <button>Add Pet</button>
                    </form>    
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Vijay Yadav</span></div>      
            </div>
        )
    }
}

