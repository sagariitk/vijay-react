import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                <h1>Form Component</h1>
                <form onSubmit={this.props.getPets}>
                <input type="text" name="owner_name" placeholder="owner_name"></input>
                <button>Get Pets</button>
                </form>
                <br></br>
                <form onSubmit={this.props.addPet}>
                <input type="text" name="pet_breed" placeholder="pet_breed"></input>
                <input type="text" name="owner_name" placeholder="owner_name"></input>
                <input type="text" name="owner_contact_no" placeholder="owner_contact_no"></input>
                <input type="text" name="pet_description" placeholder="pet_description"></input>
                <button>Add Pet</button>
                </form>
                <br></br>
                <form onSubmit={this.props.deletePet}>
                <input type="text" name="owner_name" placeholder="owner_name"></input>
                <button>Delete Pets</button>
                </form>
            </div>
        )
    }
}

export default Form;