import React from 'react';
import Search from '../components/Search';
import {connect} from 'react-redux';
import {fetchPeliUnica} from '../action-creators/peliculas'
import MoldePeliUnica from '../components/MoldePeliUnica'



import 'bootswatch/dist/solar/bootstrap.min.css';


class PeliUnica extends React.Component {
  
  componentDidMount(){
    this.props.fetchPeliUnica()
  }


  render() {    
    return (
      <div className='container'>      
          <MoldePeliUnica peliUnica={this.props.peliUnica} />        
          </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
      peliUnica: state.peliculas.selectPelis
  }}


const mapDispatchToProps = function(dispatch,ownProps) {
  
      const id= ownProps.match.params.id
    return {
      fetchPeliUnica:()=> dispatch(fetchPeliUnica(id))
  }}
export default connect(mapStateToProps,mapDispatchToProps)(PeliUnica);