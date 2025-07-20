# Components

Components are small reusable building blocks and combine to build the overall user interface.

- It helps re-using the code and changes need to be applied once at a one-single place.
- Related code stored together like CSS, JS and HTML in one place closely. 
- Following design and development principal which is always a good idea.


## JSX & React Component

- `index.html` contains the basic markup language and nothing more, it loads `index.jsx` file.
- `index.jsx` imports something from `App.jsx` file and.
- `App.jsx` contains markup for the content that renders on the screen.

JSX stands for JavaScript Synatx Extension used to describe and create HTML elements in Javascript in a declarative way. It does not work in browser and is transformed by development server before it reaches to browser.

## Rules to create Components Function

- Function name must start with uppercase character (e.g. - MyHeader).
- Function must return a value that can be rendered by React.

## Example for Component

```
function Header(){
    return (<h1> Hello </h1>);
}

function App() {
    return (
        <div>
            <Header />
        </div>
    );
}
```

## Custom Component Tree

### index.js 
- It acts as a main entry point of our react app, since it's the first file to be loaded by the HTML file.
- It's in this place where react app boots up using `import ReactDOM from "react-dom/client";` responsible for outputting the App component's content on the screen.
- Within index.jsx file, App component function `<App />` is imported into index.jsx file and it's being used as JSX code.
Its being used as value for render(); method `render(<App >)`.
- render() method is called on an object that's created with abither method, the `createdRoot()` method. 
- It takes an existing HTML element as an input, so an element that's not being created by React but is part of the index.html file already (e.g - `<div id="root"></div>`) and injects it into this element.

<div style="background-color: #00bfff3a; ; border-radius: 5px; padding: 10px">
<div style="color: #00bfffff; font-weight: bold;"> ℹ️ NOTE: </div>
Custom components must start with an uppercase character. This tells React that it's a custom component and prevents confusion with built-in HTML elements like <span style="color: #00bfffff; font-weight: italic;">header</span>, <span style="color: #00bfffff; font-weight: italic;">div</span>, <span style="color: #00bfffff; font-weight: italic;">img</span>, etc.
</div>

## Chapter 02: Passing & Output Dynamic Values

Using `{}` curly braces it allows us to use any JavaScript expression between the JSX code.

``` 
<p>
    {1+1} 
</p>
```

### Import assets

To load and include assets 
- Instead of using as <br>
`<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />` <br>
- We can import the image using and use it like component <br>
    ```
    import reactImg from './assets/react-core-concepts.png'
    ...
    <img src={reactImg} alt="Stylized atom" />
    ```

This makes sure that the image is included in the final page and deployment package during the build process. 
Here `reactImg` is a Javascript object / variable which points to the image.

<hr>

<div style="float: right">
    <a href="./02-props.md">Next Read - Props</a>
</div>