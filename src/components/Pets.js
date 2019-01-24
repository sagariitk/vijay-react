import React from 'react';

class Pets extends React.Component {
    render() {
        return (
            <div>
                <h1>Pets Componnet</h1>
                {this.props.pets.map((pet) => {
                return (
                        <div >
                            <div key = {pet.pet_breed}>
                                <p >Pet Breed : {pet.pet_breed}</p>
                                <p >Owner Name: {pet.owner_name}</p>
                                <p >Owner Contact No: {pet.owner_contact_no}</p>
                                <p >Pet Details: {pet.pet_description}</p>
                            </div> <br/>
                        </div>
                    );
                })}           
            </div>
        )
    }
}

export default Pets;