# Props

Props enable you to pass data into the components and to use data in there.

```
<CoreConcept title="Components" description="The Core UI building block." image={componentsImg} />
```
Here **title**, **description** and **image** are props.


- To accept these values within the Component function we accept one parameter which is called `props` (You can name it anything you want).
- This props parameter will be set by React because it's React that will execute this function.
- React will pass a value to this props parameter to this function when it calls it, and the value that will be passed for this parameter to this function by React will be an object.
- The Object will have all these key-value pairs. All custom sttributes as keys and all values as values grouped into it.


```
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
```

## Alternative Props Syntax

### Approach 01
Alternatively, we can create a [data.js](../../src/data.js) which will include all the details about the core-concepts.

```
import { CORE_CONCEPTS } from './data';
...

<CoreConcept 
    title={CORE_CONCEPTS[0].title} 
    description={CORE_CONCEPTS[0].description} 
    image={CORE_CONCEPTS[0].image}
/>
```

### Approach 02

Using spread operator

```
<CoreConcept {...CORE_CONCEPTS[0]} />
<CoreConcept {...CORE_CONCEPTS[1]} />
<CoreConcept {...CORE_CONCEPTS[2]} />
<CoreConcept {...CORE_CONCEPTS[3]} />
```

### Approach 03

Using Object De-Structuring

```
function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```

<hr>

<div style="display: flex; justify-content: space-between;">
    <a href="./01-components.md">Previous Read - Components</a>
    <a href="./03-events.md">Next Read - Events</a>
</div>
