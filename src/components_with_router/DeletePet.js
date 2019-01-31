import React from 'react';
import { NavLink } from 'react-router-dom';



export default class DeletePet extends React.Component {

    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <div className="header">
                    <h1>Delete a Pet</h1>
                </div>   
                <div className="body">
                    <form>
                        <button>Delete Pet</button>
                    </form> 
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Vijay Yadav</span></div>      
      
            </div>
        )
    }
}

