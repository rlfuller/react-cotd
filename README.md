# React App - Catch of the Day

## This application is a react application for a fish market called Catch of the Day. I'll use this readme to document my thoughts as I learn more about react. In creating this application, I will be following Wes Bos' tutorial for beginning react: [React for Beginners](https://reactforbeginners.com/). 

### How to run this app
4/22/2019 - As of today, I don't really have an application, just have scaffolding and the base of an app. You can run this by cloning this repo from [https://github.com/rlfuller/react-cotd] and then running `npm install` from the cotd folder. Once you have the application loaded, you can start the application by running `npm start`.  Obviously npm is a dependency and you should have a version install > 9. 

### 4/22/2019 - Thoughts on components
The building block of react is components and what is a component, a small piece of reusable code. You create your application from these small pieces of reusable.  This reminds me of something I always think of when I'm given a mockup or page that I'm trying to create in html, which is to always imagine boxes around all of the elements that you need and then translate those boxes into html tags. For instance, you need a navigation bar at the top, thats a box and you can use a `<div>` or better, a `<nav>` element. 

It seems like react components are a lot like this, but instead of containing the visual elements,  they also contain the code that makes the functionality around that specific 'box' work. 

### 4/22/2019 - First Component
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

### 4/27/2019 - CSS
There are a couple of ways to add your css to React. It can be a link tag like normal in the html file where the mount point for your application is. You could also create css for each component and import the css for that component into that component.  Another way is to import the css into your starting point for the application (index.js). If your app is created with create-react-app, then under the scenes, react will recognize that this is a css file and handle compiling it and rendering any changes to your app. 

### 4/27/2019 - App Component
We create an `App (App.js)` component that becomes the main component that holds other components. This component gets imported to our `index.js` file, but components can also be imported into other components, our `header, inventory, and order` components will be imported into our our App component. Some tips or things to remember:
* Component files start with a capital letter, `App.js`, not `app.js`
* Don't forget to export default your component `export default App`
* Applying classes to the elements, we are in jsx, not html, use `className=...` not `class=...`
* Any returned items should be wrapped in parenthesis so you can format nicely across lines

Really what you need to be thinking about at this point is what your app is going to look like and all the 'boxes' that you are going to need to hold your elements. It's almost as if you are creating a wireframe and then rendering those elements that will be holding your other elements as components. At this point, you should have an outline of your layout of your application. 

### 4/27/2019 - Props Introduction & Stateless functional components
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

### 4/27/2019 - Routing
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

### 5/2/2019 - Handling Events
My nemesis is back ... `this`. 
In order to access `this` when you are in a custom method, there are a couple of different ways you can do it, but it seems like perhaps the easiest way, is to create your method as a property on the component and then set it to a ES6 arrow function which binds `this`. You could do that like this ... (see what I did there ?)

```javascript
    //property set to an arrow function, which binds this
    goToStore = (event) => {
        //1. stop the form from submitting
        event.preventDefault();
        
        //2. get the text from that input
        const storeName = this.myInput.current.value;

        //3. change the page to /store/whatever they entered
        this.props.history.push(`/store/${storeName}`);
    }
```

We need to acces this because we are trying to access `this` from the goToStore method which is created on our component, but access this inside this method (before we convert the method to a property with a ES6 arrow function) doesn't work because this inside the method is `undefined`. 

When the user clicks the button, we also want to change the url to the store and we can do that using `pushState`. This is available from the props from React Router. Because our component is a child of the Router, we have access to the methods we need without having to pass the component down several levels via props. So with the following, we able to push the url to the the store without reloading the page. 
```javascript
    this.props.history.push(`/store/${storeName}`);
```

### 5/4/2019 - State
There was a lot going on in lesson 13, which was the first of what looks like 9 lessons on state alone. This lesson was called "Understanding State", and I'll be honest, I don't understand yet. But I"m getting there. 

Some initial takeaways: 
1. All forms have a `reset()` method that will clear the form. Not about state, but I still learned something there. 
2. State is an object that lives inside a component and stores all the data for that component and it's childre.
3. Data is kept in state and react "reacts" to any changes and will update all the places that data is being used
4. Every component can have it's own state, but it's more common to have state on the parent component & have that parent component pass the state down to it's children
5. How do we pass the state from the parent component to it's children? How do we pass anything in react? With `props'. 
6. In react, in order to update state, need to use the `setState` api. 

### 5/8/2019 to 5/18/2019 - Trip to Charleston and a stressful week at work
So last week Wednesday to Sunday, we went to Charleston, SC and then this past week, I felt like I needed a vacation from the mini-vacation which wasn't so much of a vacation due to the fact that I was still working during the day plus had to deal with an overly obtrustive Airbnb situation ending with a really, really bad interview so no react work got done.  :(/).

### 5/21/2019 - Props and State (lesson 14)
So really this should be called props, props and more props. The answer to your qustion is `props`. 

*Some things to remember!!*
Any custom function that updates state neds to live in the same component that state lives in. 

How do you get a function from one component to another component? Props. 
How does anything get anywhere? Props. 

Anything that is passed into a component is on the `props` object in that component. 

### 5/21/2019 - Displaying State with JSX (lesson 15)
Here we update update our inventory component with data from state. The data we have in state is an object of fish objects. To display these on the inventory component, we are going to use plain old js to iterate over them. Since they are objects and not an array, we will use Object.keys to interate over the keys, then map to get the values of the keys. 

```javascript
    <ul className="fishes">
        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
    </ul>
```

Inside the `.map()` we are returning a `<Fish />` component. If you notice inside the component, we have a `prop` called `key`.  If you don't have this, you get a react error `Each child in an array or iterator should have a unique "key" prop.`.  In order for react to be fast, it has to be able to quickly access the piece of component that is being updated. In order to do this, you have to give it a unique identifer to it's data. react supplies a built-in prop called `key` and you can assign it anything as long as it's unique.  So in the example above, we are assigning it the object key which is unique as it contains a unique identifier for each fish. 

### 5/25/2019 - Updating State (lesson 16)
Here we are updating the order state with a similar process to how we updated the fish state. The steps to follow are:
1. Take a copy of state (don't mutate the data)
2. Do whatever calculations or operations you need to do on the copy of state
3. Call `setState()` passing in the copy of state you took in step 1 and manipulated in step 2. 
React will copy over the existing state with the new state, and recognizing that there is a change, will update all areas in your application that have a reference to that state. 

The other thing to remember is that any methods that you need that will be updating state need to live on the same component that state lives in. In our case, this is our App component, which we can think of as the top of the tree, or parent component. It has child components for Order and Inventory (fish), which have their own state. This state lives on the parent component and gets passed down to the child components via props. 

The last lesson, or maybe it was two lessons ago, we learned that if you are iterating over state and displaying values you need to use a prop called `key` and give each value a unique id so that react can more easily 'react'.  We did this with the fishes state, displaying each fish in a ul. You can see that below in teh line `key={key}`.
```javascript
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"></Header>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order></Order>
                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
                
            </div>
        )
    };
```
In this lesson, in order to update our `Order` component with a unique listing of which fish have been added to it (passed from the App component), we need to pass a unique reference for each fish to Order. Since we have a unique reference using `key`, you would think that you can just use the `key` prop. However, we can't. So if you need to pass a key to another component, you have to create a second prop but call it anything other than `key`. You will see that above with the `index={key}` prop. So we've created our own prop (remember the key prop is a delivered react prop) called `index` and assigned it's value to be the key.  So why do we need to create a second prop and use anything other than `key` as the name? The answer is that I"m still not sure why. But according to this stack overflow [https://stackoverflow.com/questions/33661511/reactjs-key-undefined-when-accessed-as-a-prop] and especially the posting by `sebmarkbage` here: [https://github.com/facebook/react/issues/2429], `key` is not really a property. It's used by react internals and is used to determine what value should be in a slot, but not the actual value, which is why we need to create our own prop. 

### 5/26/2019 - Using Firebase to persist data
We persisted our inventory data using Firebase [https://firebase.google.com/]. Firebase is a real-time database created by google and its amazing. In order to persist the data, we use rebase. After creating a project online with firebase, we will initialize a new firebase application. 

```javascript
    import Rebase from "re-base";
    import firebase from "firebase";

    const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCSv2Cjt4s2jfIUQT5r0sxxTc7hsKUZJGM",
        authDomain: "catch-of-the-day-rachelfuller.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-rachelfuller.firebaseio.com",
        // projectId: "catch-of-the-day-rachelfuller",
        // storageBucket: "catch-of-the-day-rachelfuller.appspot.com",
        // messagingSenderId: "319718295703",
        // appId: "1:319718295703:web:a207c8f108c87eab"
    });

    const base = Rebase.createClass(firebaseApp.database());

    //This is a named export
    export {firebaseApp};

    //this is a defalt export
    export default base;
```

Then using react's `componentDidMount()` lifecycle event, we can sync the state to our firebase database. 
```javascript
    componentDidMount(){
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: "fishes"
        });
    }
```
What's so amazing about this is that anytime our state changes, react will update all the references to it, including the database ref. 