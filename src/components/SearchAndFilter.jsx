// SearchAndFilter.jsx
import React from 'react';

function SearchAndFilter({ searchQuery, onSearchChange, filters, onFilterChange, categories }) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-4">
      <input
        type="text"
        placeholder="Search by name, symbol, or number"
        value={searchQuery}
        onChange={e => onSearchChange(e.target.value)}
        className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search elements"
      />

      <select
        value={filters.phase}
        onChange={e => onFilterChange('phase', e.target.value)}
        className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Filter by phase"
      >
        <option value="">All Phases</option>
        <option value="Solid">Solid</option>
        <option value="Liquid">Liquid</option>
        <option value="Gas">Gas</option>
        <option value="Unknown">Unknown</option>
      </select>

      <select
        value={filters.group}
        onChange={e => onFilterChange('group', e.target.value)}
        className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Filter by group"
      >
        <option value="">All Groups</option>
        {[...Array(18)].map((_, i) => (
          <option key={i+1} value={i+1}>Group {i+1}</option>
        ))}
      </select>

      <select
        value={filters.category}
        onChange={e => onFilterChange('category', e.target.value)}
        className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Filter by category"
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchAndFilter;
// This component provides a search bar and filter options for the periodic table.
// It allows users to search for elements by name, symbol, or atomic number and filter them by phase, group, and category.