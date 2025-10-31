import React from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { typeColors } from '../utils/typeColors';

function PokemonSpecs({ pokemon, onBack, onAddToTeam, isInTeam }) {
  const maxStat = 255;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 max-w-5xl mx-auto border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={18} />
          Back
        </button>
        {!isInTeam && (
          <button
            onClick={() => onAddToTeam(pokemon)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <Plus size={18} />
            Add to Team
          </button>
        )}
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-50 rounded-lg p-6 mb-4 border border-gray-100">
            <img src={pokemon.sprite} alt={pokemon.name} className="w-full h-56 object-contain" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-1">{pokemon.name}</h2>
          <p className="text-gray-500 text-base mb-4">#{pokemon.pokedexNumber}</p>
          
          <div className="flex gap-2 mb-4">
            {pokemon.type.map(type => (
              <span 
                key={type}
                className="px-3 py-1.5 rounded-lg text-white font-medium text-sm"
                style={{ backgroundColor: typeColors[type] }}
              >
                {type}
              </span>
            ))}
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed text-sm">{pokemon.description}</p>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <p className="text-gray-500 text-xs mb-0.5 font-medium">Height</p>
              <p className="text-gray-900 font-semibold">{pokemon.height} m</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <p className="text-gray-500 text-xs mb-0.5 font-medium">Weight</p>
              <p className="text-gray-900 font-semibold">{pokemon.weight} kg</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-2">Abilities</h3>
            <div className="flex flex-wrap gap-2">
              {pokemon.abilities.map(ability => (
                <span key={ability} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium border border-purple-100">
                  {ability}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-gray-900 font-bold text-xl mb-5">Base Stats</h3>
          
          {[
            { name: 'HP', value: pokemon.hp, color: 'bg-red-500' },
            { name: 'Attack', value: pokemon.attack, color: 'bg-orange-500' },
            { name: 'Defense', value: pokemon.defense, color: 'bg-yellow-500' },
            { name: 'Sp. Attack', value: pokemon.specialAttack, color: 'bg-blue-500' },
            { name: 'Sp. Defense', value: pokemon.specialDefense, color: 'bg-green-500' },
            { name: 'Speed', value: pokemon.speed, color: 'bg-pink-500' }
          ].map(stat => (
            <div key={stat.name} className="mb-4">
              <div className="flex justify-between mb-1.5">
                <span className="text-gray-600 text-sm font-medium">{stat.name}</span>
                <span className="text-gray-900 font-semibold text-sm">{stat.value}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div 
                  className={`${stat.color} h-2.5 rounded-full transition-all duration-500`}
                  style={{ width: `${(stat.value / maxStat) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
          
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
            <h4 className="text-gray-600 font-medium mb-1 text-sm">Total Base Stats</h4>
            <p className="text-gray-900 text-3xl font-bold">
              {pokemon.hp + pokemon.attack + pokemon.defense + pokemon.specialAttack + pokemon.specialDefense + pokemon.speed}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonSpecs;