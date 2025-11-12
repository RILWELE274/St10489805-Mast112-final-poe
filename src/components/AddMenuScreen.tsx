import React, { useState } from 'react';
import { MenuItem } from '../types';

interface AddMenuProps {
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const AddMenuScreen: React.FC<AddMenuProps> = ({ menu, setMenu }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState<'Starter' | 'Main' | 'Dessert'>('Starter');

  const addItem = () => {
    if (!name || !price) return;
    const newItem: MenuItem = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      course,
    };
    setMenu([...menu, newItem]);
    setName('');
    setPrice('');
  };

  const removeItem = (id: number) => {
    setMenu(menu.filter(item => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👨‍🍳 Add or Remove Menu Items</h1>

      <div style={styles.form}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          style={styles.input}
        />
        <select value={course} onChange={e => setCourse(e.target.value as any)} style={styles.select}>
          <option>Starter</option>
          <option>Main</option>
          <option>Dessert</option>
        </select>
        <button onClick={addItem} style={styles.button}>Add Item</button>
      </div>

      <ul style={styles.list}>
        {menu.map(item => (
          <li key={item.id}>
            {item.name} - R{item.price} ({item.course})
            <button onClick={() => removeItem(item.id)} style={styles.removeButton}>
              ❌ Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: { padding: '2rem', fontFamily: 'Poppins, sans-serif' },
  title: { fontSize: '2rem', textAlign: 'center', marginBottom: '1rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' },
  input: { padding: '0.5rem', width: '200px', borderRadius: '5px' },
  select: { padding: '0.5rem', width: '200px', borderRadius: '5px' },
  button: { background: '#e52e71', color: 'white', padding: '0.6rem 1rem', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  list: { marginTop: '1.5rem' },
  removeButton: { marginLeft: '1rem', background: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
};

export default AddMenuScreen;
