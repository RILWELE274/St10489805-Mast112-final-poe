// MenuItemCard.tsx
import React from 'react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onRemove: (id: number) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onRemove }) => {
  // Function demonstrating TypeScript function usage
  const formatPrice = (price: number): string => {
    return `R${price.toFixed(2)}`;
  };

  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
        padding: '20px',
        margin: '10px',
        width: '260px',
        textAlign: 'center',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <h3 style={{ color: '#ff8a00', marginBottom: '10px' }}>{item.name}</h3>
      <p style={{ fontSize: '14px', color: '#777' }}>{item.course}</p>
      <p style={{ fontWeight: 'bold', color: '#333' }}>{formatPrice(item.price)}</p>

      <button
        onClick={() => onRemove(item.id)}
        style={{
          background: 'linear-gradient(to right, #ff8a00, #e52e71)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          padding: '8px 15px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default MenuItemCard;
