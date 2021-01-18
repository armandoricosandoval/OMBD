import React from 'react';
import MoldePeli from '../components/MoldePeli';
import Search from '../components/Search';
import {connect} from 'react-redux';
import {fetchPeliculas} from '../action-creators/peliculas'



import 'bootswatch/dist/solar/bootstrap.min.css';


class Peliculas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchMovie:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
  handleChange (evt) {
    const value = evt.target.value; 
    this.setState({
      SearchMovie: value    
});}

  handleSubmit(evt){
    evt.preventDefault();  
   this.props.fetchPeliculas(this.state.SearchMovie)
 }

  render() {    
    return (
          
      <div className='container'>    
         <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />     
         <div className="row pt-2">   
        {this.props.peliculas && this.props.peliculas.map((pelicula, i) => (          
          <MoldePeli pelicula={pelicula} key={i}></MoldePeli>     
        ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
      peliculas: state.peliculas.peliculas.Search
  }}


const mapDispatchToProps = function(dispatch) {
    return {
              fetchPeliculas:(title)=> dispatch(fetchPeliculas(title))
  }}
export default connect(mapStateToProps,mapDispatchToProps)(Peliculas);