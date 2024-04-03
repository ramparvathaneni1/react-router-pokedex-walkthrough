export default function AddPokemon(props) {
  return (
    <>
      <h3>Add New Pokemon</h3>
      <form name="newPokemonForm" onSubmit={props.addPokemonHandler}>
        <dt>
          <label>Name</label>
        </dt>
        <dd>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name of Pokemon"
          />
        </dd>
        <dt>
          <label>Height</label>
        </dt>
        <dd>
          <input
            id="height"
            name="height"
            type="text"
            placeholder="Height of Pokemon"
          />
        </dd>
        <dt>
          <label>Weight</label>
        </dt>
        <dd>
          <input
            id="weight"
            name="weight"
            type="text"
            placeholder="Weight of Pokemon"
          />
        </dd>
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
