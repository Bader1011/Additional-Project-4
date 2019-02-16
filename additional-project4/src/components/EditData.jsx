import React, { Component } from "react";
class EditData extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: "",
      email: "",
      phone: 0,
      password: ""
    };
  }

  handleChange(event) {
    const Name = event.target.name;
    const Value = event.target.value;

    this.setState({
      [Name]: Value,
      id: this.props.user.id
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editeData(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> Name: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange.bind(this)}
            placeholder={this.props.user.name}
          />
          <hr />
          <input
            type="text"
            name="email"
            onChange={this.handleChange.bind(this)}
            placeholder={this.props.user.email}
          />
          <hr />
          <input
            type="number"
            name="phone"
            onChange={this.handleChange.bind(this)}
            placeholder={this.props.user.phone}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange.bind(this)}
            placeholder={this.props.user.password}
          />
          <button className="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default EditData;
