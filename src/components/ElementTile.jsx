// ElementTile.jsx
import React from 'react';

function ElementTile({ element, onClick, onCompareToggle, isSelected }) {
  const { symbol, atomicNumber, name, category } = element;

  return (
    <div
      role="button"
      tabIndex="0"
      aria-label={`${name}, atomic number ${atomicNumber}`}
      className={`p-2 m-1 border rounded-lg text-center cursor-pointer
                  hover:shadow-lg focus:ring-2 focus:ring-blue-500
                  ${isSelected ? 'ring-2 ring-green-500' : ''}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
        // Arrow key navigation would be handled at grid level
      }}
      onMouseEnter={() => { /* Placeholder: playHoverSound(element) */ }}
    >
      <div className="text-sm font-semibold">{atomicNumber}</div>
      <div className="text-lg font-bold">{symbol}</div>
      <div className="text-xs text-gray-500">{category}</div>
      <button
        className="mt-1 px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
        onClick={(e) => { e.stopPropagation(); onCompareToggle(); }}
        aria-pressed={isSelected}
      >
        {isSelected ? '✓ Compare' : '+ Compare'}
      </button>
    </div>
  );
}

export default ElementTile;
