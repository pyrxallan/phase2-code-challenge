import React from 'react';
import PokemonCard from './PokemonCard';

function MyTeam({ team, onSelectPokemon, onRemoveFromTeam }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
      {team.map(pkmn => (
        <PokemonCard
          key={pkmn.id}
          pokemon={pkmn}
          onClick={() => onSelectPokemon(pkmn)}
          onRemove={onRemoveFromTeam}
          showRemove={true}
        />
      ))}
      {[...Array(6 - team.length)].map((_, i) => (
        <div 
          key={i} 
          className="bg-white rounded-lg h-56 flex items-center justify-center border-2 border-dashed border-gray-300"
        >
          <span className="text-gray-400 font-medium text-sm">Empty</span>
        </div>
      ))}
    </div>
  );
}

export default MyTeam;