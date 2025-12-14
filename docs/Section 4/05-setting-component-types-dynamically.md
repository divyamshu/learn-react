# Setting Components Types Dynamically

This helps us setting dynamically the parent component type by passing the value as props instead of a static value. This makes the component more flexible and easy to work with.

### Example -
As we have created a `Tabs` component to manage multiple `TabButton` which encloses menu as one of the child element inside it.


```📄 Tabs.jsx```
```
export default function Tabs({children, buttons}) {
    return (<>
        <menu>
            {buttons}
        </menu>
        {children}
    </>)
}
```

```📄 Examples.jsx```
```
<Tabs buttons={
    <>
    <TabButton onSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
        Components
    </>
}>{tabContent}
</Tabs>
```

Here if we would like to make the `menu` option as different name as per input from user for each `Tabs` component we need to make it dynamic.

For same, we need to 
1. Add a new prop as input `buttonsContainer`. 
2. As we want to use the value on the `buttonsContainer` prop as an identifier we will declare a const which will be named `ButtonContainer` starting with uppercase character.

```📄 Tabs.jsx```
```
export default function Tabs({children, buttons, buttonsContainer}) {
    const ButtonContainer = buttonsContainer;
    return (
        <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
        </>
    )
}
```

>[!NOTE]
> Built-in components starts with *lowercase character* example - `buttonsContainer`

We are required to pass the value which will be received by the `buttonsContainer` prop. It can be -
- `string` for built-in component like `<menu>`, `<div>`.

```📄 Examples.jsx```
```
<Tabs
    buttonsContainer="menu" 
    buttons={
    <>
    <TabButton onSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
        Components
    </>
}>{tabContent}
</Tabs>
```
- `{Custom-Component}` for custom component like `{Section}`
React would also recognize that and see that we're not trying to output some build-in component here.

```📄 Examples.jsx```
```
<Tabs
    buttonsContainer={Section}
    buttons={
    <>
    <TabButton onSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
        Components
    </>
}>{tabContent}
</Tabs>
```

### Alternatively

We can directly pass the props that starts with uppercase characters instead of remapping the prop to some constant.

```📄 Tabs.jsx```
```
export default function Tabs({children, buttons, ButtonContainer}) {
    return (
        <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
        </>
    )
}
```

```📄 Examples.jsx```
```
<Tabs
    ButtonsContainer={Section}
    buttons={
    <>
    <TabButton onSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
        Components
    </>
}>{tabContent}
</Tabs>
```