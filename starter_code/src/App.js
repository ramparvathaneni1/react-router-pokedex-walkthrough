import {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import pokemon, { pokemonDetails } from "./pokemon.js";
import SinglePokemon from "./SinglePokemon.js";
import AddPokemon from "./AddPokemon.js";

function App() {
    const [pokemonList, setPokemonList] = useState(pokemon.results);
    const [pokemonDetailsList, setPokemonDetailList] = useState(pokemonDetails);

  const addPokemonHandler = (event) => {
    event.preventDefault();
    console.log("Add Button clicked");
    console.log(event.target.elements.name.value);
    const newPokemonName = event.target.elements.name.value;
    const newPokemonHeight = event.target.elements.height.value;
    const newPokemonWeight = event.target.elements.weight.value;

    // Update Array for List of Pokemons
    setPokemonList([...pokemonList, {name: newPokemonName, url: ""} ]);

    // Update the Pokemon Details Array
    setPokemonDetailList([...pokemonDetailsList, {
        name: newPokemonName,
        height: newPokemonHeight,
        weight: newPokemonWeight,
        abilities: [
          {
            ability: {
              name: "None",
            },
          },
        ],
        sprites: {
          other: {
            home: {
              front_default: "",
            },
          },
        },
      }]);
  };
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
            <Link to="/pokemon/new">Add New Pokemon</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon" element={<Pokemon pokemonList={pokemonList} />} />
        <Route path="/pokemon/:id" element={<SinglePokemon pokemonDetailsList={pokemonDetailsList} />} />
        <Route path="*" element={<NoMatch />} />
        <Route
          path="/pokemon/new"
          element={<AddPokemon addPokemonHandler={addPokemonHandler} />}
        />
      </Routes>
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

function Pokemon({pokemonList}) {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {pokemonList.map((currentPokemon, index) => {
          return (
            <li key={index}>
              <Link key={index} to={"/pokemon/" + index}>
                {currentPokemon.name}
              </Link>
            </li>
          );
        })}
      </ul>
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
