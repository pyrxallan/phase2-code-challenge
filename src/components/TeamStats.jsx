// src/components/TeamStats.jsx

import React from 'react';
import { typeColors } from '../utils/typeColors';

function TeamStats({ team }) {
  if (team.length === 0) return null;
  
  const totalHP = team.reduce((sum, p) => sum + p.hp, 0);
  const avgAttack = Math.round(team.reduce((sum, p) => sum + p.attack, 0) / team.length);
  const avgDefense = Math.round(team.reduce((sum, p) => sum + p.defense, 0) / team.length);
  const avgSpeed = Math.round(team.reduce((sum, p) => sum + p.speed, 0) / team.length);
  const types = [...new Set(team.flatMap(p => p.type))];
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-6 border border-gray-200">
      <h3 className="text-base font-semibold text-gray-900 mb-4">Team Statistics</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-lg border border-red-200">
          <p className="text-xs text-red-700 font-medium mb-0.5">Total HP</p>
          <p className="text-2xl font-bold text-red-900">{totalHP}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-lg border border-orange-200">
          <p className="text-xs text-orange-700 font-medium mb-0.5">Avg Attack</p>
          <p className="text-2xl font-bold text-orange-900">{avgAttack}</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-3 rounded-lg border border-yellow-200">
          <p className="text-xs text-yellow-700 font-medium mb-0.5">Avg Defense</p>
          <p className="text-2xl font-bold text-yellow-900">{avgDefense}</p>
        </div>
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-3 rounded-lg border border-pink-200">
          <p className="text-xs text-pink-700 font-medium mb-0.5">Avg Speed</p>
          <p className="text-2xl font-bold text-pink-900">{avgSpeed}</p>
        </div>
      </div>
      
      <div>
        <p className="text-xs font-medium text-gray-500 mb-2">Type Coverage</p>
        <div className="flex flex-wrap gap-1.5">
          {types.map(type => (
            <span 
              key={type}
              className="px-2.5 py-1 rounded-lg text-white font-medium text-xs"
              style={{ backgroundColor: typeColors[type] }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamStats;