import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { clubs } from '../data/clubs';

export default function ClubDetail() {
  const { clubId } = useParams();
  const club = clubs.find(c=>c.id===clubId);
  const [joined, setJoined] = useState(false);

  useEffect(()=>{
    setJoined(localStorage.getItem(clubId)==='true');
  }, [clubId]);

  const handleJoin = () => {
    localStorage.setItem(clubId, 'true');
    setJoined(true);
    alert('Joined ' + club.name);
  };

  if (!club) return <p>Club not found.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{club.name}</h1>
      <img src={club.image} alt={club.name} className="mt-2 w-full h-64 object-cover rounded" />
      <p className="mt-4">{club.description}</p>
      <h3 className="mt-4 font-semibold">Upcoming Events:</h3>
      <ul className="list-disc ml-5">
        {club.events.map((e,i)=><li key={i}>{e.name} - {e.date}</li>)}
      </ul>
      {!joined
        ? <button onClick={handleJoin} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Join Club
          </button>
        : <p className="mt-4 text-green-600">You have joined this club!</p>
      }
    </div>
  );
}
