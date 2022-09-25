import React from "react";
import { observer } from "mobx-react";

import store from "../../store/pokemonStore";
import { Input } from "../styles/Global";

const PokemonFilter = () => {
  return (
    <Input
      value={store.filter}
      onChange={(e) => store.setFilter(e.target.value)}
      type="text"
      placeholder="Search.."
    />
  );
};

export default observer(PokemonFilter);
