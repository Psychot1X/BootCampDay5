import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const base = 'px-4 py-2 hover:text-blue-500';
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex space-x-4">
        <NavLink to="/" className={({ isActive }) => base + (isActive ? ' text-blue-600' : '')}>Home</NavLink>
        <NavLink to="/clubs" className={({ isActive }) => base + (isActive ? ' text-blue-600' : '')}>Clubs</NavLink>
        <NavLink to="/about" className={({ isActive }) => base + (isActive ? ' text-blue-600' : '')}>About</NavLink>
      </div>
    </nav>
  );
}
