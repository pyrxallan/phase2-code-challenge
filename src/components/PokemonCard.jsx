import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Type: {pokemon.type}</p>
      <p>HP: {pokemon.hp}</p>
    </div>
  );
}

export default PokemonCard;