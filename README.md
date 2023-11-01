# Intro to React Router

## Lesson Objects

1. Describe the point of React Router
2. Install React Router
3. Set Up Routes
4. Create Links
5. Create a 404 Page
6. Use URL Params

## Setup

Go into starter_code, install dependencies:

```bash
cd starter_code
npm i
```

This should display a bunch of Pokemon on the page

## Install React Router

Simply install the package:

```bash
npm install react-router-dom
```

Require it in `src/index.js`

```javascript
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom"; //add this line
```

Surround `<App />` with `<BrowserRouter>` in `index.js` so that the `<App />` component has access router capabilities:

```javascript
<BrowserRouter>
  <App />
</BrowserRouter>
```

Now, let's start up the server:

```bash
npm run start
```

## Set Up Routes

In `App.js` Let's move the list of Pokemon into its own component:

```js
function App() {
  return (
    <>
      <h1>Pokemon!</h1>
      <Pokemon />
    </>
  );
}

function Pokemon() {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {pokemon.results.map((currentPokemon, index) => {
          return <li key={currentPokemon.name}>{currentPokemon.name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
```

At the top, import the `Routes` and `Route` properties of React Router:

```javascript
import { Routes, Route } from "react-router-dom";
```

Define a place to hold our routes. This will contain information about what component to show when a specific URL is visited:

```js
function App() {
  return (
    <>
      <h1>Pokemon!</h1>
      <Routes>
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </>
  );
}
```

The `path="/pokemon"` prop of the `<Route>` component tells us that, when the path in the URL is set to `/pokemon`, it should display whatever component is set to the `element` prop (in this case `<Pokemon/>`)

If we change the URL in our browser to `http://localhost:3000/pokemon` we should now see the list of Pokemon

## Create Links

In the last section, we changed the URL of the app, and it appeared (at least to the user) as though we'd visited a brand new web page. In reality, this just ran some javascript. We didn't actualy view a brand new page. But we had to manually change the URL in the browser's navigation bar. That's clearly not a good user experience. We want the user to have links that they can click on. Those links will take the user to those other aspects of the application.

Let's first create a place for our navigation inside the `App()` component declaration:

```html
<h1>Pokemon!</h1>
<nav>
  <ul>
    <li>Pokemon</li>
  </ul>
</nav>
```

Now let's import `Link` from the `react-router-dom` package. `Link` is the React Router equivalent of the HTML `<a>` tag. It will change the URL of the application when clicked, thus adjusting which `Route` element is displayed:

```javascript
import { Routes, Route, Link } from "react-router-dom";
```

Now that it's accessable to us, let's incorporate the component into the HTML:

```html
<Link to="/pokemon">Pokemon</Link>
```

Now if we change the path of the URL of the app back to `/` and click the `Pokemon` link, we should see that the `<Pokemon>` component has loaded

## Add Additional Links

Let's create some additional components, just for the sake of repetition:

```js
function Home() {
  return (
    <>
      <h2>Home</h2>
      <p>Welcome to my Pokemon website!</p>
    </>
  );
}

function About() {
  return (
    <>
      <h2>About</h2>
      <p>I'm a grown man who is obsessed with Pokemon</p>
    </>
  );
}
```

Set up routes for them:

```html
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/pokemon" element={<Pokemon />} />
</Routes>
```

Create links for them:

```js
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/pokemon">Pokemon</Link>
    </li>
  </ul>
</nav>
```

Now we should be able to navigate around just a normal set of web pages

## Set Up a 404 Page

This is basically the same before. Create the component:

```js
function NoMatch() {
  return (
    <>
      <h2>404: Not Found</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}
```

Now when we create `<Route>` component for it, we simply set `path="*"`:

```html
<Route path="*" element={<NoMatch />} />
```

Now if we change the path to anything that doesn't have an exact match (e.g. `/feed-me-a-stray-cat`), our `<NoMatch>` will be loaded.

We can additionally add a `<Link>` to our `<nav>` that has its `to` prop set to something that doesn't exactly match any of our explicit `<Route>` componenets:

```html
<li>
	<Link to="/feed-me-a-stray-cat">This is a broken link</Link>
</li>
```

## Use URL Params

We can use URL params to pass data into a component from the path of the URL. First let's import `useParams` from the `react-router-dom` package:

```js
import { Routes, Route, Link, useParams } from "react-router-dom";
```

Now let's set up a `<Route>`:

```js
<Route path="/pokemon/:id" element={<SinglePokemon />} />
```

Note the `:id` in the `path` prop. We can access anything that's passed into the second segment of that path with the `useParams` that we just imported:

```js
function SinglePokemon() {
  const { id } = useParams();
  return (
    <>
      <h2>{pokemonDetails[id].name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{pokemonDetails[id].weight}</dd>
        <dt>Height:</dt>
        <dd>{pokemonDetails[id].height}</dd>
      </dl>
    </>
  );
}
```

Now when we change the URL's path to something like `/pokemon/0` we can view additional details abouta pokemon.

Let's set up some links in the `<Pokemon>` component to our new `/pokemon/:id` path:

```js
{
  pokemon.results.map((currentPokemon, index) => {
    return (
      <li key={currentPokemon.name}>
        <Link to={"/pokemon/" + index}>{currentPokemon.name}</Link>
      </li>
    );
  });
}
```
## Hungry For More?
Since we have so much code within a single file, let's refactor our app by creating a file for each component in the `/src` directory. Don't forget to import your new components into your `App.js`!
