import React, { useState, useEffect } from 'react';
import { clubs } from '../data/clubs';
import ClubCard from '../components/ClubCard';

export default function Clubs() {
  const [list, setList] = useState(clubs);
  const [view, setView] = useState('grid');
  const [sort, setSort] = useState('az');

  useEffect(() => {
    const sorted = [...clubs].sort((a,b) =>
      sort==='az' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setList(sorted);
  }, [sort]);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <button onClick={()=>setView('grid')} className="mr-2">Grid</button>
          <button onClick={()=>setView('list')}>List</button>
        </div>
        <select onChange={e=>setSort(e.target.value)} value={sort}>
          <option value="az">Name A-Z</option>
          <option value="za">Name Z-A</option>
        </select>
      </div>
      <div className={`flex flex-wrap -m-2 ${view==='list'?'flex-col':''}`}>
        {list.map(c=><ClubCard key={c.id} club={c} view={view}/>)}
      </div>
    </div>
  );
}
