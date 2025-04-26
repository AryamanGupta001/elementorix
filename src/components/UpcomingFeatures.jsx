// UpcomingFeatures.jsx
import React from 'react';

function UpcomingFeatures() {
  return (
    <div className="p-4 mt-8 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-bold mb-2">Upcoming Features</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>🔊 Audio playback integration for element hover/click (COMING SOON)</li>
        <li>📱 Mobile-friendly layout enhancements (COMING SOON)</li>
        <li>🔊 Audio playback on hover/click (e.g. pronunciation, elemental sounds)</li>
        <li>📱 Mobile-friendly layout enhancements</li>
        <li>🔍 Advanced search (search within properties, numeric range filters)</li>
        <li>✨ User accounts to save favorites and compare lists</li>
      </ul>
    </div>
  );
}

export default UpcomingFeatures;
// This component lists upcoming features for the periodic table app, providing users with a glimpse of what to expect in future updates.
// It uses Tailwind CSS for styling and is designed to be responsive and visually appealing.