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
                    <td><input type="email" ref={(val) => {this.email_id = val}} required defaultValue={user.email_id}/></td>
                    <td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = id}} className="btn green"/>
                    </td>
                </tr>  

            ) : (

                <tr  key={id}>
                    <td>{user.name}</td>
                    <td>{user.email_id}</td>
                    <td><button className="white black-text" onClick={() => pressEditBtn(user.id)}>Edit</button>  |  <button className="black-text" data-toggle="modal" data-target="#exampleModal" onClick={()=>pressDelete(user.id)}>Delete</button>
                    
          
                  
                
                  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          Are you sure
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancle</button>
                          <button type="button" className="btn btn-primary">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                           
    </td>
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
