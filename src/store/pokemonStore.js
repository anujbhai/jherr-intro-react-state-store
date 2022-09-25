import { makeObservable, observable, computed } from "mobx";

class Store {
  pokemon = [];
  filter = "";
  selectedItem = null;

  constructor() {
    makeObservable(this, {
      pokemon: observable,
      filter: observable,
      selectedItem: observable,
      filteredPokemon: computed
    });
  }

  get filteredPokemon() {
    return this.pokemon.filter(({ name: { english } }) =>
      english.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  setSelectedItem(selectedItem) {
    this.selectedItem = selectedItem;
  }
}

const store = new Store();

fetch("https://r31c58.csb.app/pokemon.json")
  .then((res) => res.json())
  .then((pokemon) => store.setPokemon(pokemon));

export default store;
