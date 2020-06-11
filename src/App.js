import React from 'react';
import AddUser from './AddUser';
import User from './Users';
import './App.css';

class App extends React.Component {
  constructor(props) {    // Shortcut: rconst 
    super(props)
  
    this.state = {
       users: [
        {
          id: 1, 
          name: "Jenny"
        },
        {
          id: 2, 
          name: "Diana"
        }
       ]
    };
    this.addUser = this.addUser.bind(this);        // This binds the addUser method to THIS App.js so it knows which state to reference when called. Or, you can bind in passed prop of rendered child component
  }
  
  // Delete User: Modify state from child component; Must pass this function as a prop to child 
  deleteUser(id) {                                 // id is a placeholder and allows us to use it in defining the return statement of this fxn (within the parenthesis)
    this.setState({
      users: this.state.users.filter(user => (     // Create new users object array. Open paranthesis after arrow is shorthand for return keyword. Filter array method will return new array including only items that DO NOT have a matching id
        user.id !== id
      ))
    })
  }

  // Add new user: Add AddUser.js state to App.js state
  addUser(userData) {                             // Need to create userData in AddUser.js
    this.setState({
      users: [...this.state.users, userData]      // The spread syntax (...) gives us all current values of the state array. [] creates an array. Comma adds the new data
    })
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1> Form State, Spread Syntax, Ternary Operator </h1>
        </header>
        <AddUser addUser1={this.addUser}/>
        <hr />
        <User userArray={this.state.users} deleteUser1={this.deleteUser.bind(this)} />     {/* Passing state to child comp as prop so child can specify how to display the info */}
      </div>
    );
  }
}

export default App;
