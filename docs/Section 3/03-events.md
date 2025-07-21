# Events

In regular JS we would use query selector like 

```
document.querySelector('button').addEventListener('click', ()=> {
    ...
});
```

In React, we don't write imperative code, we use declarative approach.
And therefore, when working with React, instead of us interactive with DOM, we let React do that. 

Therefore, in React we 

- Add Event Listeners by adding a special prop to the elements like `onClick`.

```
export default function TabButton(props) {
  return (
    <li>
      <button onClick={<function_name>}>{props.children}</button>
    </li>
  );
}
```
> [!WARNING]  
> Do not add parenthesis to the `onClick={<function_name>}` as we want to pass the function name as value to the onClick prop. The function should not be executed by you, but should be executed by React.

## Chapter 07: Passing Functions as Values to Props

We need to pass a function as values to Prop of our custom component as below.

```
// App.jsx

function App() {
  function handleSelect() {
    console.log('Hello World - selected');
  }

  return (
    ...
    <menu>
        <TabButton onSelect={handleSelect}>Components</TabButton>
        <TabButton onSelect={handleSelect}>JSX</TabButton>
        <TabButton onSelect={handleSelect}>Props</TabButton>
        <TabButton onSelect={handleSelect}>State</TabButton>
    </menu>
    ...
  );
}

```

```
// TabButton.JSX
export default function TabButton(props) {
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}
```
OR
```
export default function TabButton({children, onSelect}) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
```
## Chapter 08: Passing Custom Arguments to Event Functions

To distinguish on which button was clicked and execute an action in response to it. We need to pass a parameter within the `handleSelect` function

```
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'JSX', 'Props', 'State'
    console.log(selectedButton);
  }
```
> [!IMPORTANT] 
> In React, you cannot directly pass a function with arguments to an event handler prop, because doing so would execute the function immediately during rendering. Instead, you should pass an anonymous function (such as an arrow function) that calls your handler with the desired argument when the event occurs.

```
<menu>
    <TabButton onSelect={() => handleSelect("components")}>
        Components
    </TabButton>
    <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
    <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
    <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
</menu>
```

<hr>

<div style="display: flex; justify-content: space-between;">
    <a href="./02-props.md">Previous Read - Props</a>
    <a href="./04-state.md">Next Read - State</a>
</div>
