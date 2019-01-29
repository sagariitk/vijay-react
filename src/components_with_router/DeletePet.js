import React from 'react';


class DeletePet extends React.Component {

    deletePet = async (e) =>{
        e.preventDefault();
        const body = {
            owner_name : e.target.elements.owner_name.value,
        }
        const api_call = await fetch(`http://127.0.0.1:1337/pets`, {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      const status = await api_call.status;
      console.log(status);
      if(status === 200) {
          console.log('pet deleted from database');
      }
    }
    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <div className="header">
                    <h1>Delete a Pet</h1>
                </div>   
                <div className="body">
                    <form onSubmit={this.deletePet}>
                    <input type="text" name="owner_name" placeholder="owner_name"></input>
                    <button>Add Pet</button>
                    </form> 
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Vijay Yadav</span></div>      
      
            </div>
        )
    }
}

export default DeletePet;