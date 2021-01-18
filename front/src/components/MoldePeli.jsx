import React from 'react';
import { Link } from 'react-router-dom';

const MoldePeli = ({ pelicula }) => {

  return (
    <div className="col-md-4">
      <div className="card-deck">
        <div className="card">
       <Link to={`/movies/${pelicula.imdbID}`}>
          <img src={pelicula.Poster} alt={pelicula.Title} className="card-img-top" width="100" />
        </Link>
        <div className="card-body">
          <h4>{`${pelicula.Title} (${pelicula.Year})`}</h4>
          <p>{`Type: ${pelicula.Type}`}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MoldePeli;