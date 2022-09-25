import React from "react";
import { observer } from "mobx-react";

import store from "../../store/pokemonStore";

const PokemonInfo = () => {
  return store.selectedItem ? (
    <div className="info-container">
      <h2>{store.selectedItem.name.english}</h2>

      <table width="100%">
        <tbody>
          {Object.keys(store.selectedItem.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td align="right">{store.selectedItem.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default observer(PokemonInfo);
