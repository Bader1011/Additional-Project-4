import React, { Component } from "react";

class ShowVolunteer extends Component {
     
    render() { 
        return ( 
            <div>
                Name: {this.props.volunteer.name}s
                Email: {this.props.volunteer.email}
                Password: {this.props.volunteer.password}
                Phone: {this.props.volunteer.phone}
                <button onClick={() => {this.props.delete(this.props.volunteer.id)}}> Delete </button>
                <button onClick={() => {this.props.editeData(this.props.volunteer.id)}}> Edit </button>
            </div>
         );
    }
}
 
export default ShowVolunteer;