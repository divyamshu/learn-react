# Forwarding Props to Wrapped Elements

Forwarding props is a key concept in component-based frameworks like React, referring to the practice of passing data received by a parent component down to one of its child components.

### Manual Prop Forwarding (Prop Drilling)
This method involves explicitly defining and passing each prop from one component to the next. 
```
export default function Example({ id, title }) {
    return (
        <Section id={id} title={title} className="Section">
            ...
        </Section>
    );
}
```
Declare all the props in component.jsx
```
export default function Section({ id, title, children, className }) {
    return (
        <section id={id} className={className}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
```

This method can become repetitive and difficult to maintain as component hierarchies deepen, a problem known as "prop drilling". 

### Forwarding with the JSX Spread Syntax
To simplify the manual process, you can use the JavaScript spread syntax (...) to forward all props dynamically without listing each one individually. 

```
export default function Example({ id, title }) {
    return (
        <Section id={id} title={title} className="Section">
            ...
        </Section>
    );
}
```
using REST Property also called Spread Operator in JavaScript we can use `...props` to forward all the props
```
export default function Section({ title, children, ...props }) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
```

While convenient, this should be used with restraint to avoid passing unnecessary props, which can lead to performance issues or unexpected behavior, such as passing non-standard attributes to a DOM element. 

### Forwarding Refs (forwardRef) [DEPRECATED]

A special case of forwarding involves refs, which are used to access the underlying DOM node of a child component. Refs cannot be passed like normal props. React provides a specific utility function called React.forwardRef to handle this. 

```
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// In a parent component:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

>[!IMPORTANT]
>As of React 19, forwardRef for function components is deprecated and replaced by a simpler model, but the underlying concept remains relevant for managing DOM access.