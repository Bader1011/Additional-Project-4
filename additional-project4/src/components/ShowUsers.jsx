import React, { Component } from "react";

class ShowUsers extends Component {
    render() { 
        return ( 
            <div className="u">
                Name: {this.props.user.name} <br></br>
                Email: {this.props.user.email}<br></br>
                Password: {this.props.user.password}<br></br>
                Phone: {this.props.user.phone}<br></br>
                <button onClick={() => {this.props.delete(this.props.user.id)}}>Delete</button>
                <button onClick={() => {this.props.editeData(this.props.user)}}>Edit</button>
            </div>
        );
    }
}
 
export default ShowUsers;