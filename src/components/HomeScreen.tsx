import React from 'react';
import { MenuItem } from '../types';

interface HomeProps {
  menu: MenuItem[];
}

const HomeScreen: React.FC<HomeProps> = ({ menu }) => {
  // Group menu items by course and compute averages
  const courses = ['Starter', 'Main', 'Dessert'] as const;
  const averagePrice = (course: string) => {
    const filtered = menu.filter(item => item.course === course);
    if (filtered.length === 0) return 0;
    const total = filtered.reduce((sum, item) => sum + item.price, 0);
    return (total / filtered.length).toFixed(2);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🍴 Complete Menu</h1>

      {courses.map(course => (
        <div key={course} style={styles.courseSection}>
          <h2>{course}s</h2>
          <p>Average Price: R{averagePrice(course)}</p>
          <ul>
            {menu
              .filter(item => item.course === course)
              .map(item => (
                <li key={item.id}>
                  {item.name} - R{item.price}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: '2rem',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#fff8f2',
    color: '#333',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  courseSection: {
    marginBottom: '2rem',
    backgroundColor: '#ffe6cc',
    padding: '1rem',
    borderRadius: '12px',
  },
};

export default HomeScreen;
