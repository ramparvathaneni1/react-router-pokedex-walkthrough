import pokemon, { pokemonDetails } from "./pokemon.js";

function App() {
	return (
		<>
			<h1>Pokemon!</h1>
			<ul>
				{pokemon.results.map((currentPokemon, index) => {
					return <li key={currentPokemon.name}>
						{currentPokemon.name}
					</li>
				})}
			</ul>
		</>
	);
}

export default App;
