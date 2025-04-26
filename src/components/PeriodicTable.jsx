
// PeriodicTable.jsx
import React from 'react';
import ElementTile from './ElementTile';

function PeriodicTable({ elements, onElementClick, onToggleCompare, selected }) {
  // elements: array of element objects (already filtered)
  // selected: set or list of atomicNumbers selected for comparison
  // onElementClick: (element) => open modal
  // onToggleCompare: (element) => add/remove from compare list

  return (
    <div className="grid grid-cols-18 gap-1" role="grid">
      {elements.map(el => (
        <ElementTile
          key={el.atomicNumber}
          element={el}
          isSelected={selected.includes(el.atomicNumber)}
          onClick={() => onElementClick(el)}
          onCompareToggle={() => onToggleCompare(el)}
        />
      ))}
    </div>
  );
}
