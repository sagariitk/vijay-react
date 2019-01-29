import React from 'react';

class GetPets extends React.Component {
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
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + localStorage.jwtToken
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
                    <h1>Pets Componnet</h1>
                </div>   
                <div className="body">
                    <form onSubmit={this.getPets}>
                    <input type="text" name="owner_name" placeholder="owner_name"></input>
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

export default GetPets;