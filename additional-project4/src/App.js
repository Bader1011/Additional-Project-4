import React, { Component } from "react";
import { getUser, logout } from "./services/authService";
import NavBar from "./components/NavBar";
import AuthForm from "./components/Auth";
import "./App.css";
import ShowVolunteer from './components/ShowVolunteer';
import ShowUsers from './components/ShowUsers';
import ShowOrganisation from './components/ShowOrganisation ';
import { setJwt, getJwt } from "./services/authService";
import EditData from './components/EditData';
import ShowLessons from "./components/ShowLessons";
//import VideoCall from './VideoCall';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      organization: [],
      activeShow: '',
      activePage: ""
    };
  }


  login = () => {
    const user = getUser();
    this.setState({ user });
  };

  logout = () => {
    logout();
    this.setState({ user: null });
  };

  getProducts = () => { };

  componentDidMount(){
    this.getData();
    this.getDataOrganization();

    
  }


  changeForm = type => {
    console.log(type);
    this.setState({
      form: type
    });
  };


  getData(){
    const url = 'http://localhost:3000/volunteer/'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({users: data})
        //this.login();
      })
      .catch(error => {
        console.log(error);
      })
  }

  getDataOrganization(){
    const url = 'http://localhost:3000/volunteer/organization'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({organization: data})
        // this.login();
      })
      .catch(error => {
        console.log(error);
      })
  }

  delete(id){
    const url = `http://localhost:3000/volunteer/users/${id}`
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
      })
      .catch(error => {
        console.log(error)
      })
  }

  usersData(){
    const user = this.state.users.map(el => {
      if( el.is_volunteer === false) {
        return <ShowUsers delete={this.delete.bind(this)}  editeData={this.editeData.bind(this)}user={el} key={el.id} /> 
      }
    })
    return user
  }

  volunteerData(){
    const volunteer = this.state.users.map(el => {
      if( el.is_volunteer === true) {
        return <ShowVolunteer delete={this.delete.bind(this)} editeData={this.editeData.bind(this)} volunteer={el} key={el.id} />
      }
    })
    return volunteer
  }

  organizationData(){
    const organization = this.state.organization.map(el => {
        return <ShowOrganisation organization={el} key={el.id} />
    })
    return organization
  }


  

  editeData(data){
    return <EditData updateData={this.updateData.bind(this)} user={data}/>
  }

  updateData(data) {
    console.log(data)
    const url = `http://localhost:3000/volunteer/users/${data.id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": getJwt()
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setJwt(data.token);
        this.login();

        this.setState({ user: data.user })
      })
      .catch(error => {
        console.log(error)
      })
  }

  renderShow(){
    if(this.state.activeShow === 'users'){
      return this.usersData()
    } else if(this.state.activeShow === 'volunteer'){
      return this.volunteerData()
    } else if(this.state.activeShow === 'organization'){
      return this.organizationData()
    
  } else if(this.state.activeShow === 'lessons'){
    return <ShowLessons/>
  }
  }

  changeActivePage = (activePage) => {

    console.log("\n\n\n\n AAAAAA \n\n\n you're in ", activePage)
    this.setState({ activePage })
  }

  render() {
    return (
       <div>


<NavBar
            user={this.state.user}
            changeForm={this.changeForm}
            logout={this.logout}
            getProducts={this.getProducts}
            changeActivePage={this.changeActivePage}
          />
      
      
        <AuthForm form={this.state.form} onLogin={this.login} />
       
      
      <div>

        {this.renderShow()}
        <button onClick={() => {this.setState({activeShow: 'users'})}}> Users List</button>
        <button onClick={() => {this.setState({activeShow: 'volunteer'})}}>  Volunteer List</button>
        <button onClick={() => {this.setState({activeShow: 'organization'})}}>  Organization and Volunteer List</button><br/>
        <button onClick={() => {this.setState({activeShow: 'lessons'})}}>  lessons</button>
      
      </div>
      </div>
    );
  }
}

export default App;
