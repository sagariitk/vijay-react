import React from 'react';
import { NavLink } from 'react-router-dom';


export default class GetPets extends React.Component {
    state = {
        pets:  []
    }
    getPets = async (e) =>{
        e.preventDefault();
        const owner_name = e.target.elements.owner_name.value;
        try{
            const api_call = await fetch(`http://127.0.0.1:1337/pets/${owner_name}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const status = await api_call.status;
            if(status === 200) {
                const data = await api_call.json();
                this.setState({
                    pets: data
                });
                console.log(data);
            }
            else {
                console.log(status);
                console.log('error');
            }
        }
        catch(err) {
            console.log('error');
            alert('data server is not responding');
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
                    <h1>Pets Componnet</h1>
                    <form onSubmit={this.getPets}>
                        <input type="text" name="owner_name" placeholder="Owner Name"></input><br></br>
                        <button>Get Pets</button>
                    </form>
                    <div className="body-item">  
                        <h2> Total Pets: {this.state.pets.length}</h2>
                    </div>
                    {this.state.pets && this.state.pets.map((pet) => {
                        return (
                                <div className="body-item">  
                                    <div key = {pet.pet_breed}>
                                        <p >Pet Breed : {pet.pet_breed}</p>
                                        <p >Owner Name: {pet.owner_name}</p>
                                        <p >Owner Contact No: {pet.owner_contact_no}</p>
                                        <p >Pet Details: {pet.pet_details}</p>
                                    </div> <br/>
                                </div>
                            );
                        })} 
                </div>
                <div className="footer">&copy; Copyright 2019 Vijay Yadav</div>      
            </div>
        )
    }
}

