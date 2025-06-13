import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Welcome to Campus Club Finder</h1>
      <p className="mt-4">Discover and join student clubs easily.</p>
      <Link to="/clubs" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded">
        Explore Clubs
      </Link>
    </div>
  );
}
