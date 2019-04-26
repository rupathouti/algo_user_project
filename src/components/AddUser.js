import React,{ Component } from 'react';
import axios from 'axios';

class AddUser extends Component{

    state = {
        id:null,
        name:null,
        email_id:null,
        isEditing:false
    }
    //call addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);  
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s4">
                        <input name="name" autoComplete="off" placeholder="Enter your name" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="email_id" autoComplete="off" type="text" required placeholder="Enter your email_id" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Add +" className="btn blue"/>
                    </div>

                    
                </form>
                
            </div>
        );
    }
}
export default AddUser;