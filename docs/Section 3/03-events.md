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
> Do not add parenthesis to the function_name as you want to pass it as value that's passed to the onClick prop. As the function should not be executed by you, but should be executed by React.








<hr>

<div style="display: flex; justify-content: space-between;">
    <a href="./01-components.md">Previous Read - Components</a>
    <a href="./03-events.md">Next Read - Events</a>
</div>
