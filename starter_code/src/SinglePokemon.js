import {useParams} from "react-router-dom";
// import { pokemonDetails } from "./pokemon.js";
export default function SinglePokemon({pokemonDetailsList}) {
    const { id } = useParams();
    return (
      <>
        <h2>{pokemonDetailsList[id].name}</h2>
        <img 
            src={pokemonDetailsList[id].sprites.other.home.front_default} 
          alt={"image of " + pokemonDetailsList[id].name}
          width="150" height="150"/>
        <dl>
          <dt>Abilities:</dt>
          {pokemonDetailsList[id].abilities.map((ability, index)=> 
              <dd key={index}>{ability.ability.name}</dd>
          )}
          <dt>Weight:</dt>
          <dd>{pokemonDetailsList[id].weight}</dd>
          <dt>Height:</dt>
          <dd>{pokemonDetailsList[id].height}</dd>
        </dl>
      </>
    );
  }