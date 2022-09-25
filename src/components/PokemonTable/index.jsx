import React from "react";
import { observer } from "mobx-react";

import store from "../../store/pokemonStore";
import PokemonRow from "../PokemonRow";

const PokemonTable = () => {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Type</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {store.filteredPokemon.slice(0, 15).map((pokemon) => (
          <tr key={pokemon.id}>
            <PokemonRow
              pokemon={pokemon}
              onSelect={(pokemon) => store.setSelectedItem(pokemon)}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default observer(PokemonTable);
