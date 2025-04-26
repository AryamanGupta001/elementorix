// CompareTool.jsx
import React from 'react';

function CompareTool({ elements }) {
  if (elements.length === 0) return null;
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Comparison</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border">
          <thead>
            <tr>
              <th className="px-2 py-1">Property</th>
              {elements.map(el => (
                <th key={el.atomicNumber} className="px-2 py-1">
                  {el.symbol} ({el.atomicNumber})
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Name</td>
              {elements.map(el => (
                <td key={el.atomicNumber} className="border px-2 py-1">{el.name}</td>
              ))}
            </tr>
            <tr>
              <td className="border px-2 py-1">Atomic Mass</td>
              {elements.map(el => (
                <td key={el.atomicNumber} className="border px-2 py-1">{el.atomicMass}</td>
              ))}
            </tr>
            <tr>
              <td className="border px-2 py-1">Electron Config</td>
              {elements.map(el => (
                <td key={el.atomicNumber} className="border px-2 py-1">{el.electronConfig}</td>
              ))}
            </tr>
            {/* Add more rows for properties like meltingPoint, boilingPoint, density... */}
            <tr>
              <td className="border px-2 py-1">Category</td>
              {elements.map(el => (
                <td key={el.atomicNumber} className="border px-2 py-1">{el.category}</td>
              ))}
            </tr>
            <tr>
              <td className="border px-2 py-1">Discovered By</td>
              {elements.map(el => (
                <td key={el.atomicNumber} className="border px-2 py-1">
                  {el.discoveredBy} ({el.discoveryYear})
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompareTool;
// // This component displays a comparison table for selected elements.
// // It takes an array of elements and renders their properties in a table format.