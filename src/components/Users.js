import React, { Component } from 'react';

class Users extends Component{

    // call updateUser (App.js)
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.name.value, this.email_id.value);
    }
    
    render(){

        const {allUsers, pressEditBtn, pressDelete} = this.props;

        const usersList = allUsers.map((user) => {
            const {id} = user
            return user.isEditing === true ? (
                
                <tr  key={id}>
                    <td><input type="text" ref={(val) => {this.name = val}} required defaultValue={user.name}/></td>
                    <td><input type="text" ref={(val) => {this.email_id = val}} required defaultValue={user.email_id}/></td>
                    <td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = id}} className="btn green"/>
                    </td>
                </tr>  

            ) : (

                <tr  key={id}>
                    <td>{user.name}</td>
                    <td>{user.email_id}</td>
                    <td><button className="btn white black-text" onClick={() => pressEditBtn(user.id)}>Edit</button>  |  <button className="btn red" onClick={()=>pressDelete(user.id)}>Delete</button></td>
                </tr>

            );
        });

        return(
            <table className="striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email_id</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        );
    }
}

export default Users;
