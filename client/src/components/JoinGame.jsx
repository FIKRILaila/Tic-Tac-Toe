import React,{useState} from 'react'

const JoinGame = ({onFormSubmit}) => {
    const [name,setName] = useState('');
    const [gameId,setGameId] = useState('');
  return (
    <div>
        <h4>Join existing game</h4>
        <div className="form-group row">
            <div className="col">
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="form-control" />
            </div>
            <div className="col">
                <input type="text" onChange={(e) => setGameId(e.target.value)} placeholder="Enter game id" className="form-control" />
            </div>
            <div className="col">
                <button className="btn btn-warning" onClick = {() => onFormSubmit(name , gameId)}>Join Game</button>
            </div>
        </div>
    </div>
  )
}

export default JoinGame;