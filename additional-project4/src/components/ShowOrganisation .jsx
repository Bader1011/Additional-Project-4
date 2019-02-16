import React, { Component } from "react";

class ShowOrganisation extends Component {
  render() {
    return (
      <div>
        <h1> Name: {this.props.organization.name}</h1>
        <h1> Volunteer member name: {this.props.organization.user_id}</h1> <br/>  <br/>
      </div>
    );
  }
}

export default ShowOrganisation;
