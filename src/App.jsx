import React from "react";

import { Container, Title, TwoColLayout } from "./components/styles/Global";
import "./styles.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

function App() {
  return (
    <Container>
      <Title>Pokemon Search</Title>
      <p>Lorem ipsum dolor sit amet adipicing elit volputat.</p>

      <TwoColLayout>
        <div>
          <PokemonFilter />

          <PokemonTable />
        </div>

        <PokemonInfo />
      </TwoColLayout>
    </Container>
  );
}

export default App;
