# State

## Chapter 09: Why we need State
To move further and use the event to make changes to the visible UI, let's initialize a variable `tabContent` with value **Please click a button** in the App() function.

```
// App.jsx

function App() {
  let tabContent = 'Please click a button';

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'JSX', 'Props', 'State'
    console.log(selectedButton);
  }
  ...
```

To render the output lets include the variable below menu option as `{tabContent}`

```
  return (
    ...    
    <menu>
      <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
      <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
      <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
    </menu>
    {tabContent}
    ...
  );
}
```
When the application loads it will render "Please click a button" below the menu component.

If we want to dynamically update the value from "Please click a button" to TabButton labels like components, JSX, Props and State, we will update the value of `tabContent` variable on selection of each event.


```
function App() {
  let tabContent = 'Please click a button';

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    tabContent = selectedButton;
    console.log(tabContent);
  }
  ...
```

This will update the value of the `tabContent` variable and in console you'll be able to see the new updated value of the `tabContent` variable.

### But

You'll notice there will be no changes in the output text "Please click a button" although event is generating the output in console.

### This is because...

the `function App()` component is not executed again on execution of `function handleSelect()` function. 

### Why ?

As the `function App()` function component is not executing again, the entire JSX code is not getting re-evaluated, so here `tabContent` only knows the initial value "Please click a button", not the updated value assigned by selectedButton.

> [!NOTE]
> By default, React Components executes only once.

For Example, the `function App()` function component is first encountered in `index.jsx` and that's therefore point in time, React executes the function and render it.  

### How React Checks if UI Updates are Needed

React **compares** the **old output** ("old JSX code") of your component function to the **new output** ("new JSX code") and **applies any differences** to the actual website UI.

## Chapter 10: Concept about State

As you noticed above, we can't use a regular variable like `tabContent` to render dynamic content as the `function App()` component is not executing again.

So, we need a way to tell React that we wanna update the UI.

And this can be achieved using another crucial component called **State**.

##### This concept is all about ...
- registering variables, that are handled by React and 
- that are updated with help of a function that's provied by React, 
- that also tell React that data changed and 
- that will therefore cause React to update the UI.

And these special variables are created with help of special functions that must be imported from the React library.

```
import {useState} from 'react';
```

All the functions that start with `use` in React projects are called **React Hooks.**.

React Hooks are technically regular functions but they must only be called inside of React component functions or inside of other React Hooks.

> [!NOTE]
> You must call these Hook functions directly inside of the component function like `function App()` not nested inside of some other function like `function handleSelect()` as this is not allowed, and must be called on the top level of the component function.

### Two Golden Rules of Hooks

- Only call Hooks **inside of Component Functions**
- Only call Hooks **on the top level**

### useState()

**useState()** yeilds an array with __Two Elements__ and it'll always be **exactly two elements**.

```
const stateArray = useState('Please click a button');
```
- Using array destructing 

```
const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');
```

### Here,

- `useState('Please click a button')` - **Initial state value** stored by React.
- `selectedTopic` - **Current state value** provided by React may change if the component function is executed again.
- `setSelectedTopic` - **State updating function** updates the stored value & "tells" React to re-execute the compoent function in which useState() was called.

State updates leads to new state values (as the component function executes again).

```
// App.jsx

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'JSX', 'Props', 'State'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  
  return (
    ...    
    <menu>
      <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
      <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
      <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
    </menu>
    {selectedTopic}
    ...
  );
}
```

Now dynamic value updates from "Please click a button" to selected component label.

When we call `setSelectedTopic` React in the end schedules, this state update and it then re-executes this component function. So therefore, the updated value will only be available after this app componeny function executed again. 

<hr>

<div style="display: flex; justify-content: space-between;">
    <a href="./03-events.md">Previous Read - Props</a>
    <a href="./05-conditional-rendering.md">Next Read -  Rendering Content Conditionally</a>
</div>
