# Outputting List Data Dynamically

Presently in Core-Concept Section we are displaying declaring it manually by defining indices like

```
<section id="core-concepts">
    <h2>Time to get started!</h2>
    <ul>
    <CoreConcept {...CORE_CONCEPTS[0]} />{" "}
    {/* Using Object Destructing */}
    <CoreConcept
        title={CORE_CONCEPTS[1].title}
        description={CORE_CONCEPTS[1].description}
        image={CORE_CONCEPTS[1].image}
    />
    <CoreConcept
        title={CORE_CONCEPTS[2].title}
        description={CORE_CONCEPTS[2].description}
        image={CORE_CONCEPTS[2].image}
    />
    <CoreConcept
        title={CORE_CONCEPTS[3].title}
        description={CORE_CONCEPTS[3].description}
        image={CORE_CONCEPTS[3].image}
    />
    </ul>
</section>
```
Now the problem with this is we manually repeat this component 4x in our code as we have 4 data entries in core-concept array in [data.js](../../src/data.js). If we remove one the entries, the app would break with broken element !

## Chapter 13: Dynamically Rendering using Array

JSX is capable of outputting array of data in JSX, dynamically, like - 
```
{[Hello, World]}
```
And also array's of renderable data i.e. - JSX code like - 
```
{[<p>Hello</p>,<p>World</p>]}
```

In [data.js](../../src/data.js) we have array of JS objects and JSX will not be able to output that and understand which data to wrap in which component.
Since, JSX is capable of outputting an array of JSX elements, we could try to transform this array of objects to an array of JSX elements.

To transform arrays in JS we can use built-in `map()` method. Which produces a new array based on existing array.

```
{CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem}>)}
```

- Here map takes a JS function which will receive an array item as input `(conceptItem)`.- 
- This function will be executed for every item in array `CORE_CONCEPTS`, we will get that value for every item as parameter in `conceptItem`.
- Inside of this arrow function, we can then return the code we want to transform this item to, here want to transform it to `<CoreConcept {...CORE_CONCEPTS[0]>` component.
- Now we no longer access to a specific core concept index here. Instead, we use `{...conceptitem}` in this core concept array.
- Add Key prop that uniquely identifies the list item. Under the hood, it's uded by React to efficiently render and update this list

```
{CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}>)}
```

<hr>

<div style="display: flex; justify-content: space-between;">
    <a href="./05-conditional-rendering.md">Previous Read - Rendering Content Conditionally</a>
</div>