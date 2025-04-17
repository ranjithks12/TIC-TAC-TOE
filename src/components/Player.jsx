import { useState } from "react";
export default function Player({initialName, symbol, isActive, onChangeName}){
    const [ playerName, setPlayername ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handelEditClick(){
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handelChange(event){
        setPlayername(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handelChange}/>
    }
    return (
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handelEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    );
}