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
    handleChange(e) {           // e is for event; like any param, it's arbitrary, but it lets us know what we have access to (ex. input's name, value, etc)
        this.setState({                       // setState includes {} because we're creating a new object 
            [e.target.name]: e.target.value,  // using [e.target.name] rather than username or id allows you to reuse this method for multiple elements; also need to have a name attribute in each input element whose value is a state property name
        });               
    }
    
    render() {
        return (
            <form className="container my-5">       {/* Since we installed Bootstrap, we can grab form syntax from Bootstrap website */}
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
                        value={this.state.id}               // value attribute must match a state property name
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default AddUser


