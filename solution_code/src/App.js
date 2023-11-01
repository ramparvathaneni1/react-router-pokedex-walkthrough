import pokemon, { pokemonDetails } from "./pokemon.js";
import { Routes, Route, Link, useParams } from "react-router-dom";


function App() {
  return (
    <>
      <h1>Pokemon!</h1>
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
          <li>
            <Link to="/feed-me-a-stray-cat">This is a broken link</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemon/:id" element={<SinglePokemon />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

    </>
  );
}

function Pokemon() {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {pokemon.results.map((currentPokemon, index) => {
          return <li key={currentPokemon.name}>
            <Link to={"/pokemon/" + index}>{currentPokemon.name}</Link>
          </li>;
        })}
      </ul>
    </>
  );
}

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

export default App;
