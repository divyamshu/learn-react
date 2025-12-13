import TabButton from "./TabButton"
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Example({ id, title, ...props }) {
    const [selectedTopic, setSelectedTopic] = useState(null);

    // let tabContent = 'Please click a button';

    // const stateArray = useState('Please click a button'); [Alterivative way to write useState]
    // const [selectedTopic, setSelectedTopic] = useState();

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
        <Section id={id} title={title} {...props}>
            {/* Before Tabs Component */}
            {/* <menu>
                <TabButton onSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
                    Components
                </TabButton>
                <TabButton onSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton onSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
                <TabButton onSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
            </menu> */}

            {/* Adding Tabs Component - JSX slots */}
            <Tabs buttons={
                <>
                <TabButton onSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
                    Components
                </TabButton>
                <TabButton onSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton onSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
                <TabButton onSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
            </>
            }>
            </Tabs>

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
        </Section>
    );
}