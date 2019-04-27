import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';
import axios from 'axios';


class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
      }

      componentDidMount(){
       this.getAllUsers();

      }
    
      getAllUsers = () => {
        axios.get('http://localhost:8081/api/users')
        .then(response => {
            console.log(response.data);
            this.setState({ users: response.data });
            
        })
        .catch(function (error) {
          console.log(error);
        })
      }

   
      // (newUser) is received from AddUser.js
      addUser = (newUser) => {
            //let users = [...this.state.users, newUser]; // this will add newUser to this.state.users and return array.
           

            axios.post(`http://localhost:8081/api/users`, { name:newUser.name,
            email_id:newUser.email_id })
            .then(res => {
              console.log(res);
              console.log(res.data);
              this.getAllUsers();
            })
            .catch(function (error) {
                console.log(error);
              })

   
      }

      // when press edit button
      // (i) is received from Users.js
      pressEditBtn = (index) => {
        let users = this.state.users;
        //users[i].isEditing = true;
        users.forEach((user)=> { user.id === index ? user.isEditing = true : user = user });

        this.setState({
            users : users
        });
      }

      // (i, name, email_id) is received from Users.js
      updateUser = (i, name, email_id) => {
        
        axios.put('http://localhost:8081/api/users/' + i, { name:name,
        email_id:email_id })
        .then(res => {
          console.log(res);
          this.getAllUsers();
        })
        .catch(function (error) {
            console.log(error);
          })

      }
      // (i) is received from Users.js
      
      pressDelete = (i) => {
        axios.delete('http://localhost:8081/api/users/' + i)
        .then(res => {
          console.log(res);
          this.getAllUsers();
        })
        .catch(function (error) {
            console.log(error);
          })

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
