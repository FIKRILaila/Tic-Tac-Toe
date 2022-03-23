import React, { useState } from 'react';

const JoinGame = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [gameId, setGameId] = useState('');

  return (
    <div className="shadow-sm p-4 rounded">
      <h4 className="border border-end-0 border-top-0 border-bottom-0 border-info border-5 p-2 mb-4 rounded">Join existing game :</h4>
      <div className="form-group row col-md-12">
        <div className="col col-md-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col col-md-5">
          <input
            type="text"
            placeholder="Enter game Id"
            className="form-control"
            onChange={(e) => setGameId(e.target.value)}
          />
        </div>
        <div className="col">
          <button
            onClick={() => onFormSubmit(name, gameId)}
            className="btn btn-warning"
          >
            Join Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinGame;
