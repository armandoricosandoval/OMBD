import React from 'react';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import {connect} from 'react-redux';
import {fetchOutUser} from '../action-creators/users';



import 'bootswatch/dist/solar/bootstrap.min.css';



class NavbarContainer extends React.Component {
 
  render() {    
    return (
      <div className='container'>    
         <Navbar user={this.props.users} logout={this.props.fetchOutUser}/>     
        </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
      users: state.users.user
  }}


const mapDispatchToProps = function(dispatch) {
    return {
              fetchOutUser:()=> dispatch(fetchOutUser())
  }}
export default connect(mapStateToProps,mapDispatchToProps)(NavbarContainer);