import React, { Component } from 'react'

 class Anotherpage extends Component {
  render() {
    return (
      <div>
         <form> 
            <div></div> 
       <label>ID:  </label> 
       <input type="text" required></input> <br></br>
       <label> User ID:  </label> 
       <input type="text" required></input> <br></br>
       <textarea name="Address" rows="4" cols="30"></textarea> 
       <input type="text" required></input> <br></br> 
       <label>City: </label> 
       <input type="text" required></input> <br></br> 
       <label>Country: </label> 
       <input type="text" required></input> <br></br>
       <button>Submit</button> 
       </form>
      </div>
    )
  }
}

export default Anotherpage