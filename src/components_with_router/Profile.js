import React from 'react';

class Profile extends React.Component {
    state = {
        profile:  []
    }
    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <div className="header">
                    <h1>Profile Componnet</h1>
                </div>   
                <div className="body">
                    <div >
                        <p >First Name : {localStorage.firstname}</p>
                        <p >Last Name: {localStorage.lastname}</p>
                        <p >User Name: {localStorage.username}</p>
                        <p >Mobile No: {localStorage.mobileno}</p>
                    </div> <br/>
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Vijay Yadav</span></div>      
            </div>
        )
    }
}

export default Profile;