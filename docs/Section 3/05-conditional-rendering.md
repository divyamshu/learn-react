# Rendering Content Conditionally

Let's suppose we want to display some info text initially, something like "Please select a topic" instead of default topic like `component`.

For this we've to remove initial value inside `useState()`; For this the Initial value should maybe
- An Empty String <br>
  `const [selectedTopic, setSelectedTopic] = useState('');`

- or null <br>
  `const [selectedTopic, setSelectedTopic] = useState(null);`

- or no value <br>
  `const [selectedTopic, setSelectedTopic] = useState();`

This will no be enough as page will break ! We need output some content conditionally

For this we need to output some fallback text like "Please select a topic" if we haven't selected a topic. So

- Either we need to show <br> `<p>Please select a topic<p>` or
  
- Selected Topic content
    ```
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
    <code> {EXAMPLES[selectedTopic].code}</code>
    </pre>
    ```
## We have 3 different approaches to Output Conditionally

### Approach 01 - Using Turnery Operator

#### 01 Simple Approach
```
{!selectedTopic ? <p>Please select a topic</p> : null}

{selectedTopic ? (
<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
    <code> {EXAMPLES[selectedTopic].code}</code>
    </pre>
</div>) :  null}
```
#### 02 Combined Approach

```
{!selectedTopic ? <p>Please select a topic</p> : (
<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
    <code> {EXAMPLES[selectedTopic].code}</code>
    </pre>
</div>)}
```

### Approach 02 - Using Logical Operator 

```
{!selectedTopic && <p>Please select a topic</p>}

{selectedTopic && (
<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
    <code> {EXAMPLES[selectedTopic].code}</code>
    </pre>
</div>)}
```

### Approach 03 - Using Variable

```
let tabContent = <p>Please select a topic</p>;

if (selectedTopic) {
   tabContent = (
     <div id="tab-content">
       <h3>{EXAMPLES[selectedTopic].title}</h3>
       <p>{EXAMPLES[selectedTopic].description}</p>
       <pre>
         <code> {EXAMPLES[selectedTopic].code}</code>
       </pre>
     </div>);
}
...

return (
    <div>
      <Header />
      ...
      {tabContent}
      ...
    </div>
  );
```