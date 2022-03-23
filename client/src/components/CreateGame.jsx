import React, { useState } from 'react';

const CreateGame = ({ onFormSubmit }) => {
  const [name, setName] = useState('');

  return (
    <div className="shadow-sm p-4 rounded">
      <h4 className="border border-end-0 border-top-0 border-bottom-0 border-info border-5 p-2 mb-4 rounded">Create new game :</h4>
      <div className="form-group row col-md-12">
        <div className="col col-md-9">
          <input
            type="text"
            placeholder="Enter your name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col col-md-3">
          <button onClick={() => onFormSubmit(name)} className="btn btn-info">
            Create Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGame;
