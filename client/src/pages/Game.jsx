import React,{useEffect} from 'react'
import io from 'socket.io-client';
let socket;
const Game = ({name, gameId}) => {
  const SERVER_ENDPOINT = 'http://localhost:5001';
  const event = gameId ? 'Join Game' : 'Create Game';
  console.log(`${name} want to ${event}`);

  useEffect(() =>{
    socket = new io(SERVER_ENDPOINT);
  });
  return (
    <div>Game</div>
  );
}
export default Game;