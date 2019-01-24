import React from 'react';

export default class Contact extends React.Component {

    render() {
        return (
            <div>          
                <div>
                    <h1>Contact Component</h1>
                    <form>
                    <input type="text" name="owner_name" placeholder="owner_name"></input>
                    <button>Get Pets</button>
                    </form>
                </div>
            </div>
        );
    }
}