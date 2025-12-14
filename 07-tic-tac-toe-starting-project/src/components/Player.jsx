import { useState } from "react"

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(isEditing ? false : true);
        // setIsEditing(!isEditing);
        setIsEditing(editing => !editing); {/* BEST PRACTICE - Functional update form */}
    }

    return (
        <li>
            <span className="player">
                {!isEditing ? <span className="player-name">{name}</span> : <input type="text" required defaultValue={name} />}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing ? "Edit": "Save"}</button>
        </li>
    )
}