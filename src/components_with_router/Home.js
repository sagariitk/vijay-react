import React from 'react';

export default class Home extends React.Component {

    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
            <div className="header">
                <h1>Home Component</h1>
            </div>   
            <div className="body">

            </div>
            <div className="footer"><span>&copy; Copyright 2019 Vijay Yadav</span></div>
            </div>
        );
    }
}