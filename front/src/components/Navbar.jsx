import React from 'react';

import { Link } from 'react-router-dom';



const Navbar = (props) => {

    return (
        <div className="container">
        < nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to={`/`}>OMDB ARMAN </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to={`/`}>Home
                                     <span className="sr-only">(current)</span>
                        </Link>
                    </li>

                    {props.user.id ? (
                    <div className="collapse navbar-collapse" id="navbarColor02"> 
                    <li className="nav-item">
                        <Link className="nav-link" onClick={props.logout} to={`/movie`}>Sign-Out</Link>
                    </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/profile`}>Perfil</Link>
                        </li> </div>) : (
                        <div className="collapse navbar-collapse" id="navbarColor02">
                             <li className="nav-item">
                            <Link className="nav-link" to={`/login`}>Login</Link>
                        </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/register`}>Register</Link>
                            </li> 
                        </div>)}
                </ul>
                
            </div>
        </nav>
        </div>
    );
};


export default Navbar;