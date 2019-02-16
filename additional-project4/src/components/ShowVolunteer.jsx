import React, { Component } from "react";

class ShowVolunteer extends Component {
  render() {
    return (
      <div className="v">
        <h2>
          Name: {this.props.volunteer.name}
          <br />{" "}
        </h2>
        <h2>
          {" "}
          Email: {this.props.volunteer.email}
          <br />
        </h2>
        <h2>
          Password: {this.props.volunteer.password}
          <br />
        </h2>
        <h2>
          Phone: {this.props.volunteer.phone}
          <br />
        </h2>
        <button
          onClick={() => {
            this.props.delete(this.props.volunteer.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            this.props.editeData(this.props.volunteer);
          }}
        >
          Edit
        </button> <br/> <br/>

     <button> call video (soon) </button><br/>
     <button> Show location (soon) </button>
      </div>
    );
  }
}

export default ShowVolunteer;
