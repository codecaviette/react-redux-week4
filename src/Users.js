import React, { Component } from 'react'

export class User extends Component {
    render() {

        // Map through array items passed from parent state, to create Jsx:
        let userJsx = this.props.userArray.map(user => (                  // Whenever using a passed property, must use this.props in class comp
            <div className="card col-12 col-md-6 p-3" key={user.id}>      {/* Grabbed Bootstrap card style syntax and modify as desired. key isn't required for code to work but recommended otherwise console will yell at you - just assign a unique id*/}
                <h4> {user.name} </h4>                                    {/* user bc that's what we are calling the item of each iteration of the map method, and name (or id) bc that's what we named the state properties */}
                <button className="btn btn-danger" onClick={() => this.props.deleteUser1(user.id)} > Delete </button>         {/* We're passing the user.id as a param to deleteUser1 fxn bc we have access to it from map method */}
            </div>
        ))

        return (
            <div>
                <h2> Users </h2>
                
                <div className="container">
                    <div className="row">
                        {userJsx}
                    </div>
                </div>
            </div>
        )
    }
}

export default User
