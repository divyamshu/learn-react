import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {

  // let tabContent = 'Please click a button';

  // const stateArray = useState('Please click a button'); [Alterivative way to write useState]
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'JSX', 'Props', 'State'
    // tabContent = selectedButton; [Won't Work because tabContent is not reactive]
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  // Approach 03
  // let tabContent = <p>Please select a topic</p>;

  // if (selectedTopic) {
  //   tabContent = (
  //     <div id="tab-content">
  //       <h3>{EXAMPLES[selectedTopic].title}</h3>
  //       <p>{EXAMPLES[selectedTopic].description}</p>
  //       <pre>
  //         <code> {EXAMPLES[selectedTopic].code}</code>
  //       </pre>
  //     </div>);
  // }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* <CoreConcept {...CORE_CONCEPTS[0]} /> */}
            {/* Using Object Destructing */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            /> */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            /> */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
            {/* Using Map Method: Section 03: CHAPTER 13 */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {/* Approach 02 */}
          {/* {!selectedTopic && <p>Please select a topic</p>} */}

          {/* Approach 01 */}
          {!selectedTopic ? <p>Please select a topic</p> : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code> {EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>)}
          {/* Approach 03 */}
          {/* {tabContent} */}
        </section>
      </main>
    </div>
  );
}

export default App;
