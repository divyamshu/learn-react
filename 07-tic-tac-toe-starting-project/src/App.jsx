
import Player from "./components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />  {/* Each Player component works in isolation from each other */}
        </ol>
      </div>
    </main>
  )
}

export default App
