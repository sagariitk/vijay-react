import React from 'react';
import { NavLink } from 'react-router-dom';


export default class Contact extends React.Component {
    
    contact = async (e) =>{
        e.preventDefault();
        var body = {
            name : e.target.elements.name.value,
            email : e.target.elements.email.value,
            query: e.target.elements.query.value
        }
        console.log(body);
        try{
            const api_call = await fetch(`http://127.0.0.1:1337/contact`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
            });
            const status = await api_call.status;
            // const data = await api_call.json();
            if(status === 200) {
                alert('Your Query has been submitted');
                window.location = '#';
            }
            else {
                console.log(status);
                console.log('Couldn\'t Submit your query');
                alert('Couldn\'t Submit your query');
                window.location = '#';

            }
        }
        catch(err) {
            console.log('Error');
            console.log(err);
        }
    }
    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <div className="header">
                    <div className="navbar">
                        <NavLink to="/"><strong style={{ fontSize: 20, padding:5 }}>Home</strong></NavLink>
                        <NavLink to="/Dashboard"><strong style={{ fontSize: 20, padding:5 }}>Dashboard</strong></NavLink>
                        <NavLink to="/Login"><strong style={{ fontSize: 20, padding:5 }}>Login</strong></NavLink>
                        <NavLink to="/Register"><strong style={{ fontSize: 20, padding:5 }}>Register</strong></NavLink>
                    </div>
                </div>   
                <div className="body">
                    <h1>Contact Componnet</h1>
                    <form onSubmit={this.contact}>
                        <input type="text" name ="name" placeholder="Name" ></input>
                        <input type="email" name ="email" placeholder="email" ></input>
                        <input type="text" name="query" placeholder="" ></input>
                        <button>Contact</button>
                    </form>
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Vijay Yadav</span></div>      
            </div>
        )
    }
}

