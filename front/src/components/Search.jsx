import React from 'react';

const Search = (props) => {
    return (
         
        <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
            <form  onSubmit={props.handleSubmit} >
                <label>Busca tu pelicula favorita</label>                           
                <input  
                type="text" 
                className="form-control " 
                placeholder="Search"
                onChange={props.handleChange} />
                
                <button className="btn btn-secondary " type="submit" > 
                Search
                </button>
                
            </form>
            </div>
            </div>
        
    );
};

export default Search;

//