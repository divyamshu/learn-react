# Best Practice: Updating State Based On Old State Correctly

In React, when updating your state based on the previous value of that state,

### You should not do it like this ❌

```
import {useState} from 'react';

export default function Player ({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(!isEditing);
    }
}
```

Instead when updating your state based on the previous value of that state,

### You should ✅

You should **pass a function** to that state updating function.
This function will automatically be called by React and will receive the guaranteed latest state value.

> [!IMPORTANT]
> This is a strong recommendation by the React team.

### Why you should pass a function ?

Because the function which you pass here will be called by React and it will automatically get the current state value.
So the value before this state update here as an input.

```
import {useState} from 'react';

export default function Player ({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => (!editing));
    }
}
```
Here `editing` is just like `isEditing`. 

But this will dynamically be set and passed as a value by React when it calls this function and this function, which you pass to `setIsEditing` should then return the new state you wanna set.

### What's wrong with previous approach

Problem with this code here is - 

```
function handleEditClick() {
    setIsEditing(!isEditing);
}
```

Well, the problem with this code here is that React behind the scenes is, in the end, scheduling those state updates.

When you're triggering with those state updating functions,like `setIsEditing`.
So this state update here is **not performed instantly**.

Instead, it's scheduled by React to be **performed in the future**.
Now, the future will probably be in one or two milliseconds.
So it's really fast, but it's not instant.

We we call this function immediately after the first state updating function, the result you might expect.

#### Expectations 
```
function handleEditClick() {
    setIsEditing(!isEditing); // => true
    setIsEditing(!isEditing); // => false
}
```
#### But it will be 
```
function handleEditClick() {
    setIsEditing(!isEditing); // => true
    setIsEditing(!isEditing); // => true
}
```
#### Why ?

Here - 
- 1st `setIsEditing(!isEditing);` **schedule a state update ** but does not immediately change that state.
- Instead, in the next line thereafter, we still have that same old state as we had before because we're, still in the same component function execution cycle so to say. 
- So therefore, 2nd line also does not change the state back to `false`, but schedules the same update to `true`.
- Then these two schedule state updates will be executed after each other.

So, 
```
function handleEditClick() {
    setIsEditing(!isEditing); // => schedules a state update to true
    setIsEditing(!isEditing); // => schedules a state update to true
}
```

### Why use function form

```
import {useState} from 'react';

export default function Player ({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => (!editing));
    }
}
```

Using function form it works as expected, because this first scheduled update does now automatically get the latest state value for this editing state from React at the point of time where this scheduled update is executed.

And here since this component just rendered, that value will be false.

But then the update that's scheduled there after will indeed also get that latest state value at the point of time where this scheduled update is executed.

And since this second scheduled update will, of course, be executed after the first scheduled update, React will **pass the updated state value**, which will be true in this case here to that function when it is being executed by React.

And that's **why it's considered a good practice to use this function form**

>[!IMPORTANT]
>When using the function form, you simply have a guarantee by React that you'll always be working with the latest available state value

<hr>

<div style="display: flex; justify-content: space-between;">
    <a href="./07-image-storage.md">Previous Read - Image Storage</a>
    <a href="./09-user-input-two-way-binding.md">Next Read - User Input and Two way Binding</a>
</div>