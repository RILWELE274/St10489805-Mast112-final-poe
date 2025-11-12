import React, { useState } from 'react';
import { MenuItem } from '../types';

interface FilterProps {
  menu: MenuItem[];
}

const FilterScreen: React.FC<FilterProps> = ({ menu }) => {
  const [filter, setFilter] = useState<'All' | 'Starter' | 'Main' | 'Dessert'>('All');

  const filteredMenu = filter === 'All' ? menu : menu.filter(item => item.course === filter);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🍽️ Filter by Course</h1>

      <select value={filter} onChange={e => setFilter(e.target.value as any)} style={styles.select}>
        <option value="All">All</option>
        <option value="Starter">Starters</option>
        <option value="Main">Mains</option>
        <option value="Dessert">Desserts</option>
      </select>

      <ul style={styles.list}>
        {filteredMenu.map(item => (
          <li key={item.id}>
            {item.name} - R{item.price} ({item.course})
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: { padding: '2rem', fontFamily: 'Poppins, sans-serif' },
  title: { fontSize: '2rem', textAlign: 'center', marginBottom: '1rem' },
  select: { padding: '0.6rem', borderRadius: '8px', fontSize: '1rem', marginBottom: '1rem' },
  list: { listStyle: 'none', padding: 0 },
};

export default FilterScreen;
