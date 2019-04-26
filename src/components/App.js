import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';
import axios from 'axios';

class App extends Component{

    // Default dummy data
    state = {
        users:[]
      }
      // (newUser) is received from AddUser.js
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }

      // when press edit button
      // (i) is received from Users.js
      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      // (i, name, email_id) is received from Users.js
      updateUser = (i, name, email_id) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].email_id= email_id;
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // (i) is received from Users.js
      
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        return(
            <div className="container">
                <h1>USER</h1>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
            </div>
        );
    }
}

export default App;
