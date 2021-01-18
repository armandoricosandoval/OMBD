import React from 'react';
import Login from '../components/Login'

import { connect } from 'react-redux';
import { fetchUser } from '../action-creators/users'



import 'bootswatch/dist/solar/bootstrap.min.css';


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeEmail(evt) {
    const value = evt.target.value;
    this.setState({
      email: value

    });
  }

  handleChangePass(evt) {
    
    const value = evt.target.value;
    this.setState({
      password: value

    });
  }

  handleSubmit(evt) {
    
    evt.preventDefault();
    this.props.fetchUser(this.state.email, this.state.password)
      .then((data) => {
        if (data.payload) this.props.history.push("/profile")
      })
  }

  render() {
    return (
      
        <Login handleSubmit={this.handleSubmit} handleChangeEmail={this.handleChangeEmail} handleChangePass={this.handleChangePass} />
     
    )
  }
}



const mapStateToProps = function (state) {
  return {
    users: state.users.user
  }
}


const mapDispatchToProps = function (dispatch) {
  return {
    fetchUser: (email, password) => dispatch(fetchUser(email, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);