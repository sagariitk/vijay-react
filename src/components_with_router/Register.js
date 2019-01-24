import React from 'react';

class Register extends React.Component {

    register = async (e) =>{
        e.preventDefault();
        if(!e.target.elements.firstname.value){
            alert('First Name must be provided');
            console.log('First Name must be provided');
        }
        else if(!e.target.elements.username.value){
            console.log('Username must be provided');
            alert('Username must be provided');
        }
        else if(e.target.elements.password.value.length<6){
            console.log('password length must be greater than 6 letters');
            alert('password length must be greater than 6 letters');
        }
        else{
            try{
                const api_call = await fetch(`http://localhost:1337/register`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.jwtToken
                    },
                    //make sure to serialize your JSON body
                    body: JSON.stringify({
                        firstname : e.target.elements.firstname.value,
                        lastname : e.target.elements.lastname.value,
                        username : e.target.elements.username.value,
                        password : e.target.elements.password.value,
                        mobileno : e.target.elements.mobileno.value
                    })
                    });
                    const status = await api_call.status;
                    const data = await api_call.json();
                    console.log(data.msg);
                    if(status === 200) {
                        if(data.msg === "not admin"){
                            console.log('Login with admin first');
                            alert('Login with admin first');
                            window.location = '/login';
                        }
                        else{
                            console.log('User Added Successfully')
                            console.log(data.msg);
                            alert('User Added Successfully');
                        }
                    }
                    else {
                        console.log(status);
                        console.log('error');
                }
            }
            catch(err) {
                console.log(err);
                console.log('Could not add the user');
            }
        }
    }
    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <div className="header"> 
                    <h1>Register Componnet</h1>
                </div>   
                <div className="body">
                    <form onSubmit={this.register}>
                    <input type="text" name="firstname" placeholder="firstname"></input>
                    <input type="text" name="lastname" placeholder="lastname"></input>
                    <input type="text" name="username" placeholder="username"></input>
                    <input type="text" name="password" placeholder="password"></input>
                    <input type="text" name="mobileno" placeholder="mobileno"></input>
                    <button>Register</button>
                    </form>  
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Vijay Yadav</span></div>      
            </div>
        )
    }
}

export default Register;