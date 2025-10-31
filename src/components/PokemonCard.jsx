import React from 'react';
import { X } from 'lucide-react';
import { typeColors } from '../utils/typeColors';

function PokemonCard({ pokemon, onClick, onRemove, showRemove = false }) {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative border border-gray-200"
      onClick={onClick}
    >
      {showRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(pokemon.id);
          }}
          className="absolute top-2 right-2 bg-red-50 text-red-600 p-1.5 rounded-full hover:bg-red-100 z-10 transition-colors"
        >
          <X size={14} />
        </button>
      )}
      
      <div className="relative overflow-hidden bg-gray-50">
        <img 
          src={pokemon.sprite} 
          alt={pokemon.name} 
          className="w-full h-40 object-contain p-3" 
        />
        <div className="absolute top-2 left-2">
          <span className="bg-white bg-opacity-90 text-gray-600 text-xs px-2 py-0.5 rounded font-medium">
            #{pokemon.pokedexNumber}
          </span>
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-1.5 truncate">{pokemon.name}</h3>
        
        <div className="flex gap-1 mb-2.5 flex-wrap">
          {pokemon.type.map(type => (
            <span 
              key={type}
              className="px-2 py-0.5 rounded text-white text-xs font-medium"
              style={{ backgroundColor: typeColors[type] }}
            >
              {type}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
          <div className="flex justify-between text-gray-600">
            <span>HP</span>
            <span className="font-semibold text-gray-900">{pokemon.hp}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>ATK</span>
            <span className="font-semibold text-gray-900">{pokemon.attack}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>DEF</span>
            <span className="font-semibold text-gray-900">{pokemon.defense}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>SPD</span>
            <span className="font-semibold text-gray-900">{pokemon.speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;