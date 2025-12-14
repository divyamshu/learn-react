import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Example from "./components/Examples.jsx";

function App() {

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Example id="examples" title="Examples" />
      </main>
    </div>
  );
}

export default App;
