import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import AddMenuScreen from './components/AddMenuScreen';
import FilterScreen from './components/FilterScreen';
import { MenuItem } from './types';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [page, setPage] = useState<'home' | 'add' | 'filter'>('home');

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div>
      <nav style={styles.nav}>
        <button onClick={() => setPage('home')} style={styles.navButton}>Home</button>
        <button onClick={() => setPage('add')} style={styles.navButton}>Add Menu</button>
        <button onClick={() => setPage('filter')} style={styles.navButton}>Filter</button>
      </nav>

      {page === 'home' && <HomeScreen menu={menu} />}
      {page === 'add' && <AddMenuScreen menu={menu} setMenu={setMenu} />}
      {page === 'filter' && <FilterScreen menu={menu} />}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    background: '#e52e71',
    padding: '1rem',
    gap: '1rem',
  },
  navButton: {
    color: 'white',
    background: 'transparent',
    border: '2px solid white',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontFamily: 'Poppins, sans-serif',
  },
};

export default App;
