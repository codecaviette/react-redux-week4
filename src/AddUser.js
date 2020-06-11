import React, { Component } from 'react'

class AddUser extends Component {
    // Component-level state since no other components need access
    constructor(props) {
        super(props)
    
        this.state = {
             userName: '',          // To allow for modifying state, these property names are assigned as values to rendered input elements.   
             id: '',                // Then, we add an event handler fxn to handle the event of entering text into input elements
        };
    }
    
    // Event handler: When called, this function modifies the state's username to equal the event target's value. To call, need to add an event listener (ex. in input element)
    handleChange(e) {                         // e is for event; like any param, it's arbitrary, but it lets us know what we have access to (ex. input's name, value, etc)
        this.setState({                       // setState includes {} because we're creating a new object 
            [e.target.name]: e.target.value,  // using [e.target.name] rather than username or id allows you to reuse this method for multiple elements; also need to have a name attribute in each input element whose value is a state property name
        });               
    }
    
    // Event handler: When submit button is clicked, the user is added to parent state. To call, add to form element
    handleSubmit(e) {
        e.preventDefault();               // Prevents component from automatically reloading when form is submitted          
        this.props.addUser1({             // Function passed as prop from parent so use this.props... This adds new user to parent state.
            name: this.state.userName,    // These property names (name, id) must match the parent state's prop names as we're modifying/adding to that array
            id: this.state.id,
        });

        this.setState({                   // Resets this component's state back to blank
            userName: '',
            id: '',
        })
    }

    render() {
        return (
            <form className="container my-5" onSubmit={this.handleSubmit.bind(this)}>       {/* Since we installed Bootstrap, we can grab form syntax from Bootstrap website. Need to bind the handlSubmit method to THIS component so it knows to reference THIS comp's state */}
                <div className="form-group">
                    <label htmlFor="userName"> Username </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        aria-describedby="username" 
                        name="userName"
                        value={this.state.userName}                 // value attribute must match a state property name
                        onChange={this.handleChange.bind(this)}     // Bind this method to THIS component, so when called it knows which state to refer to. Another way to bind is in the constructor by saying this.handleChange = this.handlChange.bind(this)
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="id"> ID </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        area-describedby="id" 
                        name="id"
                        value={this.state.id}                       // value attribute must match a state property name
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default AddUser


