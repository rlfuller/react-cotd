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
4. Wes Bos mentioned that comments need to be js comments inside of curly braces, `{ /* comment */}`, but I tried regular html comments `//comment` and those seemed to work. Actually, they worked outsie of elements, but when you are inside the jsx, then you need to use a js comment inside curly braces, `{/* comment */}`
```jsx
    //these are ok here, but not inside the jsx
        
            <form className="store-selector">
                {/* inside here we need js comments */}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store -></button>
            </form>
```

### 4/27/2018 - CSS
There are a couple of ways to add your css to React. It can be a link tag like normal in the html file where the mount point for your application is. You could also create css for each component and import the css for that component into that component.  Another way is to import the css into your starting point for the application (index.js). If your app is created with create-react-app, then under the scenes, react will recognize that this is a css file and handle compiling it and rendering any changes to your app. 

### 4/27/2018 - App Component
We create an `App (App.js)` component that becomes the main component that holds other components. This component gets imported to our `index.js` file, but components can also be imported into other components, our `header, inventory, and order` components will be imported into our our App component. Some tips or things to remember:
* Component files start with a capital letter, `App.js`, not `app.js`
* Don't forget to export default your component `export default App`
* Applying classes to the elements, we are in jsx, not html, use `className=...` not `class=...`
* Any returned items should be wrapped in parenthesis so you can format nicely across lines

Really what you need to be thinking about at this point is what your app is going to look like and all the 'boxes' that you are going to need to hold your elements. It's almost as if you are creating a wireframe and then rendering those elements that will be holding your other elements as components. At this point, you should have an outline of your layout of your application. 

### 4/27/2018 - Props Introduction & Stateless functional components
What I remember from the react tutorial on reactjs.org is that props are properties of that allow you to pass data to components. Wes Bos describes it as state is home/where the data lives and props are the bus that gets the data where it needs to go. 

They look like attributes on an html element, `<Header tagline="Fresh Seafood Market"></Header>`. 

If your component only has a render method and prop types, then you don't need a class or react component, you can change your component to a stateless functional component which is a javascript function. 

One of the hardest things about JavaScript is that there are a million ways to write something. An example is that you can write your functional component in any one of the following ways:

Function:
```javascript
    function Header(props){
        return (
            <header className="top">
                <h1>Catch 
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                 Day</h1>
                <h3 className="tagline">
                    <span>{props.tagline}</span>
                </h3>
         </header>   
     )
 }
```

ES6 Function:
```javascript
    const Header = (props) => {
        return (
            <header className="top">
                ...
                <h3 className="tagline">
                    <span>{props.tagline}</span>
                </h3>
            </header>
        )
    }
```

ES6 Function with implicit return:
```javascript
    const Header = (props) => (
        <header className="top">
            ...
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
        </header>
    );
```

ES6 Function with implicit return and destructuring props into their own variables:
```javascript
    const Header = ({tagline, prop2, prop3, ...}) => (
        <header className="top">
            ...
            <h3 className="tagline">
                <span>{tagline}</span>
            </h3>
        </header>
    );
```

### 4/27/2018 - Routing
First - routing is easy and fun! Okay, let me elaborate - with React, because it's a library and not a framework, you can use any solution you want for routing, but we are using react-router. So react-router is easy, and fun!!! 

So my comments below are going to refer to react-router. Everything in react is a component, and so is the router. A router is just another react component.  You can define the routes with props.  Routes are defined in a switch. React will check each route definition, looking for a match and if not found, moving on to the next route. 

Below we have the following routes:
1. An exact match route that is looking for the path `/`. 
2. A route that is looking for a path that starts with `/store` and has anything after it which will be saved as a storeId variable.
3. Anything that is not either 1 or 2 will be our 'Not Found' route for a 404. 

```javascript
    const Router = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StorePicker} />
                <Route path="/store/:storeId" component={App} />
                <Route component={NotFound} />

            </Switch>
        </BrowserRouter>
    );
```