# React.createElement

It's an alternative of JSX you can use, if you don't want to do the build process.

- JSX 
  ```
  <div id="content>
    <p>Hello World</p>
  </div>
  ```

- Create Element
  ```
  import React from 'react';
  ...
  React.createElement(
    'div',
    { id: 'content },
    React.createElement(
        'p',
        null,
        'Hello World'
    )
  );
  --- index.jsx ---
  ReactDOM.createRoot(entryPoint).render(React.createElement(App));
  ```