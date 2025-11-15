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
## Chapter 11: Output Conditionally

We have 3 different approaches to Output Conditionally

### Approach 01 - Using Ternary Operator

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
## Chapter 12: Dynamic Styling

To enable styling like enabling the `active` class when a button is selected you can add the class to the button using `className`. Example - <br>
```
<button className="active" onClick={onSelect}>
    {children}
</button> 
```

But as this will add to every button component, so our goal is to set this dynamically. To do so - 

1. Accept a new prop example - `isSelected` as boolean.
   
2. Then dynamically set the className and other attributes using ternary expression <br>
   
    ```
   <li>
     <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
       {children}
     </button>
    </li>
    ```

3. Add the prop `isSelected` in the TabButton component as set it equal to value which is derived dynamically based on state. 
   
   ```
   <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components)}>
     Components
   </TabButton>
   ```


<hr>

<div style="display: flex; justify-content: space-between;">
    <a href="./04-state.md">Previous Read - State</a>
    <a href="./06-dynamic-data-list.md">Next Read - Outputting List Data Dynamically</a>
</div>