import React, { Component } from "react";

class ShowOrganisation extends Component {
    render() { 
        return ( 
            <div>
                Name: {this.props.organization.name}
            </div>
         );
    }
}
 
export default ShowOrganisation;