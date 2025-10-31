// src/components/FilterBar.jsx

import React from 'react';
import { typeColors } from '../utils/typeColors';

function FilterBar({ activeFilters, onFilterToggle, onClearFilters }) {
  const allTypes = Object.keys(typeColors);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-900 text-sm">Filter by Type</h3>
        {activeFilters.length > 0 && (
          <button
            onClick={onClearFilters}
            className="text-xs text-red-600 hover:text-red-700 transition-colors font-medium"
          >
            Clear All
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {allTypes.map(type => (
          <button
            key={type}
            onClick={() => onFilterToggle(type)}
            className={`px-2.5 py-1 rounded-lg text-white font-medium text-xs transition-all ${
              activeFilters.length === 0 || activeFilters.includes(type) 
                ? 'opacity-100' 
                : 'opacity-40'
            }`}
            style={{ backgroundColor: typeColors[type] }}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;