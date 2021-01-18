import React from 'react';
//import {Link} from 'react-router-dom';

const MoldePeliUnica = ({peliUnica}) => {

    return (
      <div className='row'>
      
          <div className="card mb-3 offset-md-3 text center">
              <img src={peliUnica.Poster} alt={peliUnica.Title} className="card-img-top" width="100"/>
             <div className="card-body">
                <h4>{`${peliUnica.Title} (${peliUnica.Year})`}</h4>                
                <p>{`Actors: ${peliUnica.Actors}`}</p>
                <p>{`Genre: ${peliUnica.Genre}`}</p>
                <p>{`Runtime: ${peliUnica.Runtime}`}</p>
                <p>{`Language: ${peliUnica.Language}`}</p>
                <p>{`Writer: ${peliUnica.Writer}`}</p>
          </div>
          </div>
        </div>
        
      );
    };

export default MoldePeliUnica;