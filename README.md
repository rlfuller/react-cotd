# React App - Catch of the Day

## This application is a react application for a fish market called Catch of the Day. I'll use this readme to document my thoughts as I learn more about react. In creating this application, I will be following Wes Bos' tutorial for beginning react: [React for Beginners](https://reactforbeginners.com/). 

### How to run this app
4/22/2019 - As of today, I don't really have an application, just have scaffolding and the base of an app. You can run this by cloning this repo from [https://github.com/rlfuller/react-cotd] and then running `npm install` from the cotd folder. Once you have the application loaded, you can start the application by running `npm start`.  Obviously npm is a dependency and you should have a version install > 9. 

### 4/22/2018 - Thoughts on components
The building block of react is components and what is a component, a small piece of reusable code. You create your application from these small pieces of reusable.  This reminds me of something I always think of when I'm given a mockup or page that I'm trying to create in html, which is to always imagine boxes around all of the elements that you need and then translate those boxes into html tags. For instance, you need a navigation bar at the top, thats a box and you can use a `<div>` or better, a `<nav>` element. 

It seems like react components are a lot like this, but instead of containing the visual elements,  they also contain the code that makes the functionality around that specific 'box' work. 

### 4/22/2018 - First Component
My takeaways for creating components:
1. Import the dependencies, "react' should be lowercase
    - `import React from "react";`
2. Every single react component is a class
3. Every single react class needs at least 1 method, `render()`
4. Render determnines what DOM elements get written to the page
5. You don't actually touch the DOM in your component. We aren't going to be doing anything like `document.querySelector...` or `element.appendChild()...`, but we will touch the DOM when we mount the application to our page
5. Mounting an application we need to import render from react-dom
    - `import {render} from "react-dom";`
6. Calling `render` takes two arguments, jsx and where we are actually mounting the component/or application, i.e. the mounting point
    - `render(<p>Hello Rachel, I see you trying to learn some stuff!</p>, document.querySelector("#main"));`
7. If you are passing a React component to render, the tag can either be self-closing or you can use the opening closing tags - either way
    - `render(<StorePicker />, ...)` or `render(<StorePicker></StorePicker>)`
8. Normally, react componets will be created in their own file. To use react components, they must be imported (so you need to make sure you export them)

### JSX Tips
1. Most people use JSX, but you could call `React.createElement()` to render your components that way, but you would probably be pretty sad if you did. 
2. You cannot return sibling elements, so you can wrap them in `<React.Fragment>`
3. Since we are returning our component, best to wrap it in parenthesis () so we can avoid any js mischief with automatic semicolon insertion after a return if we happend to add a new line for formatting
4. Wes Bos mentioned that comments need to be js comments inside of curly braces, `{ /* comment */}`, but I tried regular html comments `//comment` and those seemed to work. Actually, they worked outsie of elements, but when you are inside the jsx, then you need to use a js comment inside curly braces
```
    //these are ok here, but not inside the jsx
        
            <form className="store-selector">
                {/* inside here we need js comments */}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store -></button>
            </form>
```