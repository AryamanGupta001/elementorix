// ElementModal.jsx
import React, { useEffect, useRef } from 'react';

function ElementModal({ element, onClose }) {
  const modalRef = useRef();
  useEffect(() => {
    // Focus the modal on open
    modalRef.current.focus();
  }, []);

  if (!element) return null;
  const {
    name, symbol, atomicNumber, atomicMass,
    electronConfig, phase, group, period, category,
    meltingPoint, boilingPoint, density,
    discoveredBy, discoveryYear, interestingFact
  } = element;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-md w-full outline-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="element-title"
        tabIndex="-1"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}
      >
        <h2 id="element-title" className="text-2xl font-bold mb-2">
          {name} ({symbol})
        </h2>
        <p><strong>Atomic Number:</strong> {atomicNumber}</p>
        <p><strong>Atomic Mass:</strong> {atomicMass}</p>
        <p><strong>Electron Config:</strong> {electronConfig}</p>
        <p><strong>Phase at STP:</strong> {phase}</p>
        <p><strong>Group {group}, Period {period}</strong> — {category}</p>
        <p><strong>Melting Point:</strong> {meltingPoint}</p>
        <p><strong>Boiling Point:</strong> {boilingPoint}</p>
        <p><strong>Density:</strong> {density}</p>
        <p><strong>Discovered By:</strong> {discoveredBy} ({discoveryYear})</p>
        <p><strong>Fun Fact:</strong> {interestingFact}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ElementModal;
// This component is a modal that displays detailed information about a selected element.
// It uses the `useRef` hook to manage focus and the `useEffect` hook to set focus on the modal when it opens.