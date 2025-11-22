# Fragments

If we take example of a return statement we used in [App.jsx](../../src/App.jsx), you noticed an extra pair of <div> tag encapsulating all the components like Header, Sections etc. 

```
return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        ...
        </section>
      </main>
    </div>
    )
```
Here, if you notice, the `<div>` tag does not serve any purpose and we're left with an extra div in the DOM structure.

If we remove this `<div>`, we get an error in the return statement. <br>
`JSX expression must have one parent element`

The problem here is within return statement we're trying to return two siblings elements, not two elements inside of one parent element like before.

And in JavaScript we cannot return two separate values wrapping around parenthesis making it invalid JS code. and here we're trying to do same.


## Solution

React gives us an alternative components which we can use as a wrapper if we do need a root component to wrap some sibling components without rendering an actual element to the screen. It's called **Fragments**.

Fragments allow you to group multiple elements without adding extra nodes to the DOM. This is particularly useful when you need to return multiple elements from a component without wrapping them in an unnecessary `<div>`.

```
import {useState, Fragment } from 'react';
...

function App() {
    ...
    return (
        <Fragment>
            <Header />
            <main>
            </main>
        </Fragment>
    )
}
```

#### In Modern React Projects 
- We don't need to import Fragments.
- We don't need to create a Fragment tag `<Fragment>` instead we create an empty tag `<>`.

```
function App() {
    ...
    return (
        <>
            <Header />
            <main>
            </main>
        </>
    )
}
```
