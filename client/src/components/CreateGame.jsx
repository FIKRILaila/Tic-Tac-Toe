import React,{useState} from 'react'

const CreateGame = ({onFormSubmit}) => {
    const [name,setName] = useState('');
  return (
    <div>
        <h4>Create new game</h4>
        <div className="form-group row">
            <div className="col">
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="form-control" />
            </div>
            <div className="col">
                <button className="btn btn-info" onClick = {() => onFormSubmit(name)}>Create Game</button>
            </div>
        </div>
    </div>
  )
}

export default CreateGame;