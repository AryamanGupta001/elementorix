// App.jsx
import React, { useState, useEffect } from 'react';
import elementsData from './data/elements.json';
import PeriodicTable from './components/PeriodicTable';
import SearchAndFilter from './components/SearchAndFilter';
import ElementModal from './components/ElementModal';
import CompareTool from './components/CompareTool';
import UpcomingFeatures from './components/UpcomingFeatures';

function App() {
  const [elements, setElements] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ phase: '', group: '', category: '' });
  const [modalElement, setModalElement] = useState(null);
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    // Load or import mock data
    setElements(elementsData);
  }, []);

  // Apply search and filters
  const filteredElements = elements.filter(el => {
    // Search by name, symbol, or number
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      el.name.toLowerCase().includes(q) ||
      el.symbol.toLowerCase().includes(q) ||
      el.atomicNumber.toString() === q;
    const matchesPhase = filters.phase ? el.phase === filters.phase : true;
    const matchesGroup = filters.group ? el.group === parseInt(filters.group) : true;
    const matchesCategory = filters.category ? el.category === filters.category : true;
    return matchesSearch && matchesPhase && matchesGroup && matchesCategory;
  });

  const handleToggleCompare = (element) => {
    setCompareList(prev => {
      if (prev.includes(element.atomicNumber)) {
        return prev.filter(num => num !== element.atomicNumber);
      } else {
        return [...prev, element.atomicNumber];
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Interactive Periodic Table</h1>
      <SearchAndFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filters={filters}
        onFilterChange={(field, value) => setFilters({ ...filters, [field]: value })}
        categories={[...new Set(elements.map(el => el.category))]}
      />
      <PeriodicTable
        elements={filteredElements}
        onElementClick={setModalElement}
        onToggleCompare={handleToggleCompare}
        selected={compareList}
      />
      {modalElement && (
        <ElementModal
          element={elements.find(el => el.atomicNumber === modalElement.atomicNumber)}
          onClose={() => setModalElement(null)}
        />
      )}
      <CompareTool
        elements={elements.filter(el => compareList.includes(el.atomicNumber))}
      />
      <UpcomingFeatures />
    </div>
  );
}

export default App;
// This is the main component of the periodic table app. It manages state for elements, search queries, filters, and modals.
// It uses the `useEffect` hook to load data and filters elements based on user input.