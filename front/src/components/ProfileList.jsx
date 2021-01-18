import React from 'react';

const ProfileList = (props) => {
    console.log(props,"algooooooooooooooooo")
    return (
        <div >
    <form  onSubmit={props.handleSubmit}>
      <fieldset>
        <legend>List de Peliculas</legend>
        <div className="form-group">
          <label className="col-xs-2 control-label">Name</label>
          <div className="col-xs-10">
            <input value={props.value} onChange={props.handleChange} className="form-control" type="text"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button type="submit" className="btn btn-success" >
              Create List
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
    );
};

export default ProfileList;