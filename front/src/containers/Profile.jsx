import React from 'react';
import ProfileList from '../components/ProfileList';
import MoldePeli from '../components/MoldePeli';
import {connect} from 'react-redux';
import {fetchPeliculas,fatchCreateList} from '../action-creators/peliculas'



import 'bootswatch/dist/solar/bootstrap.min.css';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            value: '',
            invalidLength: true,
            hasChanged: false,
        };
        this.handleChange = this.handleChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
   
      }
  
    

    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
          value: value,
          SearchMovie: value  ,
          invalidLength: value.length < 1 || value.length > 16,
          hasChanged: true,
        });
      }
         
      handleSubmit(evt){
        evt.preventDefault();  
       this.props.fetchPeliculas(this.state.SearchMovie)
       this.props.fatchCreateList(this.state.value)
       this.setState({
        value: '',
      })

     }
  

    render() {
        return (
            <div className='container'>                
                        
                        <h1>Bienvenido a tu perfil</h1>
                       
                        
                    <ProfileList
                        onSubmit={this.handleSubmit}
                        
                        onChange={this.handleChange}
                         />
                
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
                fatchCreateList:()=>dispatch(createList()),
                fetchPeliculas:(title)=> dispatch(fetchPeliculas(title))
    }}

  export default connect(mapStateToProps,mapDispatchToProps)(Profile);
