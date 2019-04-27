import React,{ Component } from 'react';

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


    validate = () =>{
        let nameError="";
         let emailError="";  
         
         if(!this.state.name){
           nameError='name cannot be blank';
         }
     
     
         if(!this.state.email_id.includes('@')) {
           emailError='Invalid Error';
         } 
         if(emailError||nameError){
          this.setState({emailError,nameError}); 
          return false;
         } 
         return true;
        }

        
    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s4">
                        <input name="name" autoComplete="off" placeholder="Enter your name" required type="text" onChange={ this.updateState} />
                        <div style={{ fontSize: 18, color: "red"}}>
                    {this.state.nameError}
                   </div> 
                        </div>
                    <div className="input-field col s2">
                        <input name="email_id" autoComplete="off" type="email" required placeholder="Enter your email_id" onChange={ this.updateState } />
                        <div style={{ fontSize: 18, color: "red"}}>
                        {this.state.emailError}
                       </div>
                        </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Add +" className="blue"/>
                    </div>

                </form>
                
            </div>
        );
    }
}
export default AddUser;