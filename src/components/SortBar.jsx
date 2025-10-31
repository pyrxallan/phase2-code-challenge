import React from 'react';

function SortBar({ activeSort, onSortChange }) {
  const sorts = [
    { key: 'pokedex', label: 'Pokédex #' },
    { key: 'hp', label: 'HP' },
    { key: 'attack', label: 'Attack' },
    { key: 'speed', label: 'Speed' }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-200">
      <h3 className="font-semibold text-gray-900 text-sm mb-3">Sort By</h3>
      <div className="flex flex-wrap gap-2">
        {sorts.map(sort => (
          <button
            key={sort.key}
            onClick={() => onSortChange(sort.key)}
            className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all ${
              activeSort === sort.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            {sort.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SortBar;