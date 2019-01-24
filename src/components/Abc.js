import React from 'react';
import axios from 'axios';


export default class Abc extends React.Component {

    render() {
        return (
            <div>          
                <div>
                    <h1>Abc Component</h1>
                    {/* <form onSubmit={this.props.getPetsAxios}>
                    <input type="text" name="owner_name" placeholder="owner_name"></input>
                    <button>Get Pets</button>
                    </form> */}
                </div>
            </div>
        );
    }
}