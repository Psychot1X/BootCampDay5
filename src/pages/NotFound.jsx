import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <Link to="/" className="mt-4 inline-block text-blue-500">Go back home</Link>
    </div>
  );
}
