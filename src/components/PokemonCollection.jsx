// src/components/PokemonCollection.jsx

import React from 'react';
import { Trash2, Plus } from 'lucide-react';
import PokemonCard from './PokemonCard';

function PokemonCollection({ 
  pokemon, 
  team, 
  onSelectPokemon, 
  onAddToTeam, 
  onReleasePokemon 
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      {pokemon.map(pkmn => (
        <div key={pkmn.id} className="relative">
          <PokemonCard
            pokemon={pkmn}
            onClick={() => onSelectPokemon(pkmn)}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (window.confirm(`Release ${pkmn.name} forever? This cannot be undone.`)) {
                onReleasePokemon(pkmn.id);
              }
            }}
            className="absolute bottom-2 right-2 bg-red-50 text-red-600 p-1.5 rounded-full hover:bg-red-100 transition-colors shadow-sm border border-red-200"
            title="Release Pokémon"
          >
            <Trash2 size={14} />
          </button>
          {!team.some(p => p.id === pkmn.id) && team.length < 6 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToTeam(pkmn);
              }}
              className="absolute bottom-2 left-2 bg-green-50 text-green-600 p-1.5 rounded-full hover:bg-green-100 transition-colors shadow-sm border border-green-200"
              title="Add to Team"
            >
              <Plus size={14} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default PokemonCollection;