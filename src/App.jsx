import React, { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import PokemonSpecs from './components/PokemonSpecs';
import PokemonCollection from './components/PokemonCollection';
import MyTeam from './components/MyTeam';
import TeamStats from './components/TeamStats';
import FilterBar from './components/FilterBar';
import SortBar from './components/SortBar';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [team, setTeam] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [activeSort, setActiveSort] = useState('pokedex');
  const [loading, setLoading] = useState(true);
  
  // Fetch Pokemon from db.json
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('http://localhost:8001/pokemon');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
        setErrorMessage('Failed to load Pokémon. Please make sure json-server is running.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPokemon();
  }, []);
  
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  
  const addToTeam = (pkmn) => {
    if (team.length >= 6) {
      setErrorMessage('Your team is full! Remove a Pokémon to add another.');
      return;
    }
    
    if (team.find(p => p.id === pkmn.id)) {
      setErrorMessage('This Pokémon is already in your team!');
      return;
    }
    
    const typesInTeam = team.flatMap(p => p.type);
    const hasTypeConflict = pkmn.type.some(type => typesInTeam.includes(type));
    
    if (hasTypeConflict) {
      const conflictType = pkmn.type.find(type => typesInTeam.includes(type));
      setErrorMessage(`You already have a ${conflictType} Pokémon in your team!`);
      return;
    }
    
    setTeam([...team, pkmn]);
    setErrorMessage('');
  };
  
  const removeFromTeam = (id) => {
    setTeam(team.filter(p => p.id !== id));
  };
  
  const releasePokemon = async (id) => {
    try {
      const response = await fetch(`http://localhost:8001/pokemon/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setPokemon(pokemon.filter(p => p.id !== id));
        setTeam(team.filter(p => p.id !== id));
        if (selectedPokemon?.id === id) {
          setSelectedPokemon(null);
        }
      }
    } catch (error) {
      console.error('Error deleting Pokemon:', error);
      setErrorMessage('Failed to release Pokémon. Please try again.');
    }
  };
  
  const handleFilterToggle = (type) => {
    setActiveFilters(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };
  
  const handleSortChange = (sortKey) => {
    setActiveSort(activeSort === sortKey ? 'pokedex' : sortKey);
  };
  
  const getFilteredAndSortedPokemon = () => {
    let result = [...pokemon];
    
    if (activeFilters.length > 0) {
      result = result.filter(p => 
        p.type.some(type => activeFilters.includes(type))
      );
    }
    
    if (activeSort === 'hp') {
      result.sort((a, b) => b.hp - a.hp);
    } else if (activeSort === 'attack') {
      result.sort((a, b) => b.attack - a.attack);
    } else if (activeSort === 'speed') {
      result.sort((a, b) => b.speed - a.speed);
    } else {
      result.sort((a, b) => a.pokedexNumber - b.pokedexNumber);
    }
    
    return result;
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600 text-lg font-medium">Loading Pokémon...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Pokémon Team Builder</h1>
          <p className="text-gray-600 text-sm">Build your ultimate team</p>
        </header>
        
        {errorMessage && (
          <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm font-medium border border-red-200">
            {errorMessage}
          </div>
        )}
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              My Team <span className="text-gray-500 text-base font-normal">({team.length}/6)</span>
            </h2>
          </div>
          
          <TeamStats team={team} />
          
          <MyTeam 
            team={team} 
            onSelectPokemon={setSelectedPokemon}
            onRemoveFromTeam={removeFromTeam}
          />
        </div>
        
        {selectedPokemon ? (
          <PokemonSpecs
            pokemon={selectedPokemon}
            onBack={() => setSelectedPokemon(null)}
            onAddToTeam={addToTeam}
            isInTeam={team.some(p => p.id === selectedPokemon.id)}
          />
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Pokémon Collection</h2>
            
            <FilterBar
              activeFilters={activeFilters}
              onFilterToggle={handleFilterToggle}
              onClearFilters={() => setActiveFilters([])}
            />
            
            <SortBar
              activeSort={activeSort}
              onSortChange={handleSortChange}
            />
            
            <PokemonCollection
              pokemon={getFilteredAndSortedPokemon()}
              team={team}
              onSelectPokemon={setSelectedPokemon}
              onAddToTeam={addToTeam}
              onReleasePokemon={releasePokemon}
            />
          </div>
        )}
        
        <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-xs">
          © 2025 Pokémon Team Builder
        </footer>
      </div>
    </div>
  );
}