import React from "react";

import PokemonType from "../../PokemonType";

const PokemonRow = (props) => {
  const { pokemon, onSelect } = props;

  return (
    <>
      <td>{pokemon.id}</td>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td align="right">
        <button onClick={() => onSelect(pokemon)}>Select</button>
      </td>
    </>
  );
};

PokemonRow.propTypes = {
  pokemon: PokemonType
};

export default PokemonRow;
