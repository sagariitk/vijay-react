import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components_with_router/Navigation';
import Home from './components_with_router/Home';
import Profile from './components_with_router/Profile';
import GetPets from "./components_with_router/GetPets";
import AddPet from './components_with_router/AddPet';
import DeletePet from './components_with_router/DeletePet';
import Login from './components_with_router/Login';
import Register from './components_with_router/Register';
import Contact from './components_with_router/Contact';
import Logout from './components_with_router/Logout';
import Error from './components_with_router/Error';

import './App_with_router.css';

class App_with_router extends React.Component {

    state = {
        pets:  []
    }
    getPets = async (e) =>{
        e.preventDefault();
        const owner_name = e.target.elements.owner_name.value;
        e.preventDefault();
        const api_call = await fetch(`http://localhost:1337/pets/${owner_name}`);
        const status = await api_call.status;
        if(status === 200) {
            const data = await api_call.json();
            this.setState({
                pets: data
            });
        }
        else {
            console.log(status);
            console.log('error');
        }
    }

    getPetsAxios= async e => {
        e.preventDefault();
        const owner_name = e.target.elements.owner_name.value;
        axios.get(`http://localhost:1337/pets/${owner_name}`).then(res => {
            const status = res.status;
            if(status === 200) {
                const data = res.data;
                console.log(data);
                this.setState({
                    pets: data
                });
            }
            else {
                console.log(status);
                console.log('error');
            }
        })
    }
    addPet = async (e) =>{
        e.preventDefault();
        const body = {
            pet_breed : e.target.elements.pet_breed.value,
            owner_name : e.target.elements.owner_name.value,
            owner_contact_no : e.target.elements.owner_contact_no.value,
            pet_description : e.target.elements.pet_description.value
        }
        const api_call = await fetch(`http://localhost:1337/pets`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      const status = await api_call.status;
      console.log(status);
      if(status === 200) {
        console.log('pet added to database');

      }
    }
    deletePet = async (e) =>{
        e.preventDefault();
        const body = {
            owner_name : e.target.elements.owner_name.value,
        }
        const api_call = await fetch(`http://localhost:1337/pets`, {
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
        return(
            <div>
            <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path = "/" component = {Home} exact  />
                    <Route path = "/GetPets" component = {GetPets} exact  />
                    <Route path = "/AddPet" component = {AddPet} exact  />
                    <Route path = "/DeletePet" component = {DeletePet} exact  />
                    <Route path = "/Login" component = {Login} exact  />
                    <Route path = "/Logout" component = {Logout} exact  />
                    <Route path = "/Register" component = {Register} exact  />
                    <Route path = "/Profile" component = {Profile} exact />
                    <Route path = "/Contact" component = {Contact} exact />
                    <Route component = {Error} />
                    </Switch>
            </div>
            </BrowserRouter>
            {/* <div>
                <Titles />
                <Form getPets = {this.getPets} addPet = {this.addPet} deletePet = {this.deletePet}/><br/>
                <Pets pets = {this.state.pets} />
            </div> */}
            </div>
        )
    }
}

export default App_with_router;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;


// getPets = async (e) =>{
//     const owner_name = e.target.elements.owner_name.value;
//     e.preventDefault();
//     const api_call = await fetch(`http://localhost:1337/pets/${owner_name}`);
//     const status = await api_call.status;
//     if(status === 200) {
//         const data = await api_call.json();
//         console.log(data);
//         this.setState({
//             pets: data
//         });
//         // console.log(this.state.pets);
//     }
//     else {
//         console.log(status);
//         console.log('error');
//     }
// }
