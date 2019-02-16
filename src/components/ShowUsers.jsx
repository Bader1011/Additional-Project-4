import React, { Component } from "react";

class ShowUsers extends Component {
    render() { 
        return ( 
            <div>
                Name: {this.props.user.name}
                Email: {this.props.user.email}
                Password: {this.props.user.password}
                Phone: {this.props.user.phone}
                <button onClick={() => {this.props.delete(this.props.user.id)}}>Delete</button>
                <button onClick={() => {this.props.editeData(this.props.user)}}>Edit</button>
            </div>
        );
    }
}
 
export default ShowUsers;