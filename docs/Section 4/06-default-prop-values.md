# Setting Default Prop Values

To enable default props value for undeclared props we are required to enable it in the `Components.jsx` 

### Example  

```📄 Tabs.jsx```
```
export default function Tabs({children, buttons, ButtonContainer = 'menu'}) {
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
Here, if we don;t pass the valuye from `Examples.jsx` for ButtonContainer it'll by default take value as menu.

```📄 Examples.jsx```
```
<Tabs
    buttons={
    <>
    <TabButton onSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
        Components
    </>
}>{tabContent}
</Tabs>
```