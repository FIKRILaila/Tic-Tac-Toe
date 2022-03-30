import React, { useState } from 'react';
import './App.css';
import CreateGame from './components/CreateGame';
import JoinGame from './components/JoinGame';
import Game from './pages/Game';

const App = () => {
  const [showGame, setShowGame] = useState(false);
  const [name, setName] = useState('');
  const [gameId, setGameId] = useState('');

  const onFormSubmit = (name, gameId = '') => {
    setName(name);
    setGameId(gameId);
    setShowGame(true);
  };

  return (
    <div className="container">
      <h3 className = "border border-info border-2 p-4 text-center rounded shadow-sm mt-4 mb-4">Tic Tac Toe</h3>
      {!showGame && (
        <>
          <CreateGame onFormSubmit={onFormSubmit} />
          <h4 className="text-info mt-4 mb-4">----------------------------------  OR ----------------------------------</h4>
          <JoinGame onFormSubmit={onFormSubmit} />
        </>
      )}

      {showGame && <Game name={name} gameId={gameId} />}
    </div>
  );
};

export default App;
