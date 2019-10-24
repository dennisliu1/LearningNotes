# 1. Overview
## What is React?
- A Javascript library for building user interfaces.

## What are the benefits of using React?
- declarative: design simple views, React will update and render accordingly when data changes.
- component based: encapsulated components with their own state. Use composition and encapsulation to build entire UIs.
- Learn Once, write anywhere: no assumptions about the rest of your tech stack, only deals with UI.

# 2. Introducing JSX

## What is JSX? Benefits?
- Javascript eXtension format.
	- It gives you syntax for directly writing UI (HTML) logic in Javascript.
	- this is not required, but very helpful.
- benefits:
	- supports direct DOM manipulation with Javascript before it renders.
	- no more post-rendering Javascript required like JQuery.
	- JSX prevents injection attacks
		- everything gets turned into a string before being rendered, so no Cross-site-scripting attacks!

## How do you use JSX Syntax? single line vs multi-line, expressions, attributes, children
- DOM Elements:
	- single line: 
		- const element = <p>blah</p>
	- multi-line:
		- const element = (
			<p>
			blah
			</p>
		)
- Embedding expressions:
	- const element = <p>Hello, {myName[0] + ' to the new World!'}!</p>
- JSX is an Expression:
	- it evaluates to a function call and object, so use it like any other javascript object:
		- if, for, variable, argument, return, etc.
- JSX attributes
	- string literal:
		- const element = <p src="dennis"></p>
	- expression:
		- const element = <p src={variableName}></p>
- children
	- <p><div>blah</div></p>


## what does JSX actually convert into (function)?
- React.createElement(type, props, children)
- <p src="1">hello world</p>
- React.createElement(
	'p',
	{
		src: "1"
	},
	'hello world'
);

# 3. Rendering Elements
## How do you render elements in React?
- const element = <p>hello, world</p>
- ReactDOM.render(element, document.getElementById('root'))

## Updating the rendered Element
- react elements are immutable, so pass a new object to it.
- react DOM only updates the element when needed.

# 4. Components and Props
## Function vs Class Component Definition
- function Welcome() {
	return <p>blah</p>
}
- class Welcome extends React.Component {
	render() {
		return <p>blah</p>
	}
}

## how do you use a defined component?
- function Welcome() {...}
- function HelloWorld() {
	return (
		<Welcome>using another component!</Welcome>
	)
}

## What are props?
- all react components must act like pure functions with respect to their props.
- read only.

# 5. State and Lifecycle

## How can you convert a function -> class component?
- change function to class declaration
- move function into render() method
- replace props with this.props

## How do you add local state to a class component?
- declare this.state in the constructor
- state is an object. define your keys and initial values.

## How do you update local state in a class component?
- use `this.setState()`.
- setState takes an object with the keys you want to update.
- React will only update those keys, and only if they are different.

## State notes
- don't set state variable directly; use setState.
- state updates are asynchronous. They might be optimized by React. Don't rely on their values for calculating the next state.
- state updates can be merged together because you're updating only certain keys, not all.

## Data flows down.
- State is encapsulated to the local component.
- You can pass state or props downstream to children, but not up.
- if you want to pass data up, you actually want to extract that data to a parent to manage.

## What are the lifecycle methods?
- constructor
- componentDidMount
- render
...

# 6. Events

## How do you use an event?
- pass a prop to the event:
- <p onClick={this.myMethod}>

## how do you prevent default event behaviour?
- in your callback method, use `e.preventDefault()`.

## in event callbacks, what is e?
- e is a synthetic event.
- https://reactjs.org/docs/events.html

## Why and how do you bind the event callback function?
- this.myMethod.bind(this) in the constructor.
- or declare the method with `pubic class fields`:
	- myMethod = () => {...}
- use an arrow function directly in the callback
	- <p onClick={(e) => this.myMethod(e)}>

## how do you pass arguments to the event handler?
- use an arrow function and pass the arguments:
	- <p onClick={(e) => this.myMethod(e, this.name, 'Hello World')}>

## anti-patterns with Events
- using addEventListener.



# 7. Conditional Rendering

## How do you conditionally render?
- if condition on the `return`
- you can use {} to evaluate an if condition inside the JSX:
	- <p>{
		true && <div>blah</div>
	}</p>
	- remember that conditionals do lazy eval and returns the last result.
		- so <div>blah</div> returns true AND is returned as the result of the expression
		- so if `true` condition, the <div> is returned.
- inline if-else
	- <div>{isLoggedIn ? 'yes' : 'no'}</div>
	- <div>{
		isLoggedIn ? (
			<p>yes</p>
		)
		: (
			<p>no</p>
		)
	}</div>

## How do you not render something conditionally?
- use the above methods so they don't reach the return.
- but otherwise, return null.

# 8. List and Keys
## Rendering Multiple Components
- you can use map(), forEach, reduce(), etc. to loop through an array
- looping through an array, you can return a bunch of elements.

## the Key prop
- generated lists need some way for React to track, so it can be optimized.
- for every SIBLING component generated, add a key prop.
- keys are unique, so all sibling components are unique to each other.
- can be as easy as an index or generated by the data.

## where to put the loop
- function definition
	- numbers.map((number) => {
		<p>{number}</p> 
	})
- JSX expression
	- <p>{numbers.map((number) => {...} )}</p>

# 9. Forms
## How do you create a form in React?
- use a form element with `onSubmit` event method.
- catch the updating input elements with `onChange` and set `value` to reflect user changes.

## How do you set the user input for input components (input, textarea, select)
- generalized to the `value` prop.
- for select, you can also pass an array to select multiple.

## What happens if you set the value={null}?
- becomes uncontrolled component.
- User can edit it, but React won't know what it changed to.

## Alternatives to controlled components
- use uncontrolled components
- use fully-fledged solutions (ex. Formik)

# 10. Lifting state up

## what is lifting state up? When should you do it?
- When: you have components that share data and need to sync with each other.
- for sharing props/states between components, move the data to the closest common ancestor.

## How do you lift state up?
- remove the state of the components out and use props instead.
- in the common ancestor, use a state and pass it to the components as props.

# 11. Composition vs Inheritance
## Containment
- don't know your children ahead of time.
- use props.children
- if you got multiple children, you need your own convention.

## Specialization
- special cases of a component.
- we don't have inheritance, so we use composition.
	- just return with the component customized as you need.
	- or use a Higher Order Component.

# Accessibility
- honestly, this is an entire section on its own...

# Code-Splitting
- bundling packages all your code into a single result that unpacks on the client.
- this can get bloated for large apps.
- Thus, you want to do code splitting:
	- lazy load your files
	- creates multiple smaller bundles targeted to what you need to return.

- supported in:
	- next.js
	- webpack (needs config)
	- babel with babel-plugin-syntax-dynamic-import

- import(path).then(...)
- React.lazy(func()) and Suspense Component
	- not full supported in server-side rendering (you'll need Loadable Components).

- a good place to do code splitting is at the route level.
- for example in react router, you can use code spliting per page.

- supports only default exports (you need to re-export it as default if you want to use named exports)

# Context
## Why?
- it's hard to pass props down to a distant child - lots of passthrough!
- Context lets you pass props down easily from the parent's perspective.
- And updates from a child don't need a big callback chain - Context provides Consumers.

## usage
- create: const ThemeContext = React.createContext('name')
- wrap: return (
	<ThemeContext.Provider value="blah">
		<> // I got access inside the subtree!
	</ThemeContext.Provider>
)
- use: myChildClass.contextType = ThemeContext;
- use:
	<ThemeContext.Consumer>
		{value => /* render something using the context value */}
	</ThemeContext.Consumer>

## Things to note when using context
- harder to reuse the component (it's tied to access to a Context)
- try Component Composition instead if you only worry about passing props down many levels
	- you could pass the Component itself down as a prop, so you don't have to worry about the props.

## API
- create = React.createContext
- use parent = Context.Provider
	- triggers re-renders when context changes, regardless of `shouldComponentUpdate`
- Class.contextType
	- gives class access to `this.context` (note this syntax is for 1 context only)
- Context.Consumer
	- used to consume the context without worrying about passing it down
	- also for using Context with function components (this.context is only for classes)
	- also for using multiple Contexts easier.

# Error Boundaries
## What happens when have an error in the UI? How to handle these errors?
- react will return an error for the entire Virtual DOM.
- use an error boundary to catch these errors.

## What is an Error Boundary? How to implement?
class component that defines either/both:
- static getDerivedStateFromError(error)
- componentDidCatch(error, errorInfo)
- save the error and in the render(), return something static you can fallback on.

## How should you use Error Boundaries?
- entirely up to you, but generally websites return an 'oops' content page.

## Does Error Boundaries catch Event Handler errors?
no. Use try/catch.

## Why can't we use try/catch instead of Error Boundaries?
It's great for imperative code, but not JSX code.
Also, it doesn't handle component lifecycle methods and states correctly.

# Forwarding Refs
## What is Forwarding Refs? Why do we need it?
When making a component, you might want to get the ref for a parent to use.
But since your component might be composite, you want to decide how that ref is set.
Since ref is not a prop, you can't access it normally either.

So you need a new way to get the ref so you can pass it down correctly: Forwarding Refs.

## How to use Forwarding Refs?
const MyComponent = React.forwardRef((props, ref) => (your component here))
...
const ref = React.createRef();
<MyComponent ref={ref} />

# Fragments


# Higher Order Components
# Integrating with Other Libraries
# JSX in Depth
# Optimizing performance
# Portals
# Profiler
# React without ES6
# React without JSX
# Reconciliation
# Refs and the DOM

# Render Props
## Problem
- We have a component that has state and data.
- Encapsulating that data in the component is okay. But what if another component wants access to that data too?
- if we got the children to render as a function, we can abstract it entirely!
- render props: pass a prop = function() {return <Component />}

## Strengths
- use cases
	- the component can have abstracted children, and pass variables to them
	- A/B Testing





# Static Type Checking
# Strict Mode
# Typechecking with PropTypes
# Uncontrolled Components
# Web Components


---

# React Hooks

## Getting live values into events
- https://dev.to/scastiel/react-hooks-get-the-current-state-back-to-the-future-3op2
- https://overreacted.io/making-setinterval-declarative-with-react-hooks/

---

# What are the lifecycle methods?

# What is the differences between Function vs Class components?
- https://overreacted.io/how-are-function-components-different-from-classes/
- function
	- supposed faster.
	- no lifecycle methods or state (no: use react hooks).
	- function components capture the rendered values.
		- you always get the latest props to use, because function components are working directly with the immutable args.
- class
	- lifecycle methods.
	- access to `this`, so you get a fresh version of `render()` and lifecycle methods.
	- but because class methods get stale props, you can get subtle bugs.
	- state
- therefore:
	- components are immutable.
	- props are read only.
	- refs are for getting latest UI (live) changes.
	- the closer you get to pure functions, the easier it is to isolate the component.
