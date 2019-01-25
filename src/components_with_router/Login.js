import React from 'react';

class Login extends React.Component {
    
    login = async (e) =>{
        e.preventDefault();
        var body = {
            username : e.target.elements.username.value,
            password : e.target.elements.password.value
        }
        try{
            const api_call = await fetch(`http://localhost:1337/login`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
                });
                const status = await api_call.status;
                const data = await api_call.json();
                if(status === 200) {
                    if(data.msg === "password is not correct"){
                        console.log('password is not correct');
                        alert('password is not correct');
                        window.location = '/login';
                    }
                    else if(data.msg === "username is not registered"){
                        console.log('username is not registered');
                        alert('username is not registered');
                        window.location = '/login';
                    }
                    else {
                        console.log(data);
                        localStorage.setItem('jwtToken', data.token);
                        localStorage.setItem('username', body.username);
                        console.log(localStorage);
                        alert('Login Successful');
                        window.location = '/';
                    }
                }
                else {
                    console.log(status);
                    console.log('error');
            }
        }
        catch(err) {
            console.log('user not valid');
            console.log(err);
        }
    }
    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <div className="header">
                    <h1>Login Componnet</h1>
                </div>   
                <div className="body">
                    <form onSubmit={this.login}>
                    <input type="text" name="username" placeholder="username"></input>
                    <input type="text" name="password" placeholder="password"></input>
                    <button>Login</button>
                    </form> 
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Vijay Yadav</span></div>      
            </div>
        )
    }
}

export default Login;