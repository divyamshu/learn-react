# JSX Slots

**JSX slots** refer to a component composition pattern used in frameworks like React to pass components or JSX elements as children, allowing a parent component to control where that content is rendered.

Previously we're using multiple TabButtons within menu option, if we want to create a reusable component for it like `<Tabs>` so it would be easier within the app where we can use Tabs like this.

```
<menu>
    <TabButton onSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
        Components
    </TabButton>
    <TabButton onSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>
        JSX
    </TabButton>
    <TabButton onSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>
        Props
    </TabButton>
    <TabButton onSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>
        State
    </TabButton>
</menu>

...
{tabContent}
...
```

Now if we move it to `Tabs` component we are required to pass the `TabsButton` component JSX as props, here the slots come into the picture. This helps in maintaing the structure for the Tabs component.

```Tabs.jsx```
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
```Examples.jsx```
```
<Tabs buttons={
    <>
    <TabButton onSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
        Components
    </TabButton>
    <TabButton onSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
    <TabButton onSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
    <TabButton onSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
</>
}>
</Tabs>
```
<hr>

<div style="display: flex; justify-content: space-between;">
    <a href="./03-forwarding-props.md">Previous Read - Forwarding Props</a>
    <a href="./05-setting-component-types-dynamically.md">Next Read - Setting Components Types Dynamically</a>
</div>