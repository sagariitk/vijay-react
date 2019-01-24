import React from 'react';

export default class About extends React.Component {

    render() {
        return (
            <div>          
                <div>
                    <h1>About Component</h1>
                    {/* <form onSubmit={this.props.getPetsAxios}>
                    <input type="text" name="owner_name" placeholder="owner_name"></input>
                    <button>Get Pets</button>
                    </form> */}
                </div>
            </div>
        );
    }
}