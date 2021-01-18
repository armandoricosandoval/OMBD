import React from 'react';
import Register from '../components/Register'

import {connect} from 'react-redux';
import {createUsers} from '../action-creators/users'



import 'bootswatch/dist/solar/bootstrap.min.css';


class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
  handleChangeEmail (evt) {
    const value = evt.target.value; 
    this.setState({
      email: value
      
});}

handleChangePass (evt) {
  console.log("onchange.", evt.target.value)
  const value = evt.target.value; 
  this.setState({
    password: value
    
});}

  handleSubmit(evt){
    console.log("submit..", evt)
    evt.preventDefault();  
    this.props.createUsers(this.state.email,this.state.password)
    .then((data)=>{ 
      if(data.payload.id) this.props.history.push("/login")
    })
 }

  render() {    
    return (
         
         <Register handleSubmit={this.handleSubmit} handleChangeEmail={this.handleChangeEmail} handleChangePass={this.handleChangePass} />     
        
    )
  }
}

const mapStateToProps = function(state) {
  return {
      users: state.users.users
  }}


const mapDispatchToProps = function(dispatch) {
    return {
              createUsers:(email,password)=> dispatch(createUsers(email,password))
  }}
export default connect(mapStateToProps,mapDispatchToProps)(Users);