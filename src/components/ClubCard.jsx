import React from 'react';
import { Link } from 'react-router-dom';

export default function ClubCard({ club, view }) {
  return (
    <div className={`${view==='grid'? 'w-1/2 md:w-1/3':'w-full'} p-2`}>
      <div className="border rounded p-4 flex flex-col">
        <img src={club.image} alt={club.name} className="h-32 w-full object-cover rounded" />
        <h2 className="mt-2 font-semibold">{club.name}</h2>
        <p className="mt-1 text-sm">{club.shortDescription}</p>
        <Link to={`/clubs/${club.id}`} className="mt-auto text-blue-500">View Details</Link>
      </div>
    </div>
  );
}
