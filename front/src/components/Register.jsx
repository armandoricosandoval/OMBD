import React from 'react';

const Register = (props) => {
    return (
        <div className='row'>
            <div className="col-md-4 offset-md-4">
                <div className="card mt-4 text center">
                    <div className="card-header">
                        <h3>Register</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={props.handleSubmit} >
                            <input type="email" className="email" placeholder="Email" onChange={props.handleChangeEmail}  />
                            <input type="password" className="password" placeholder="Password" onChange={props.handleChangePass} />
                            <button type="submit" className="btn btn-secondary btn-block mt-4" >
                                SignIn
                             </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;