# Two way Binding

Two-way data binding refers to a system where changes in the user interface (UI) automatically update the corresponding model or state, and changes in the model or state automatically update the UI. This bidirectional flow of data ensures that the UI and application state remain in sync.

In React, controlled components allow two-way data binding. Here's how it works:

- The component's state holds the current value of the input field.
- The value prop of the input field is set to the state value.
- An event handler, like `onChange`, updates the state when the user modifies the input.
- This creates a cycle where changes in the input update the state, and the state in turn updates the input field, enabling two-way binding.

Here’s an example:

```
import { useState } from "react"

export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing(editing => !editing); {/* BEST PRACTICE - Functional update form */}
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" required value={playerName} onChange={handleChange}/>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing ? "Edit": "Save"}</button>
        </li>
    )
}
```
Here the event data on each onChange updates the state of the playerName


<hr>

<div style="display: flex; justify-content: space-between;">
    <a href="./08-best-practices-updating-state.md">Previous Read - Setting Components Types Dynamically</a>
    <a href="./">Next Read - </a>
</div>