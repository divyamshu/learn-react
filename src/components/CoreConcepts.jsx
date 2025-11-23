import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
    return (
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
    );
}