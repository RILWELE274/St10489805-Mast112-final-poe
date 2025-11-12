import React, { useEffect } from 'react';

interface SplashProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={styles.container}>
      <img
        src="/chefsmenu.png"
        alt="Chef Hat"
        style={styles.image}
      />
      <h1 style={styles.title}>Chef Menu App</h1>
      <p style={styles.subtitle}>Preparing your delicious experience...</p>
      <div style={styles.spinner}></div>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #ff8a00, #e52e71)',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    animation: 'fadeIn 2s ease-in-out',
  },
  image: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    boxShadow: '0 0 20px rgba(255,255,255,0.3)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    marginBottom: '2rem',
  },
  spinner: {
    border: '5px solid rgba(255,255,255,0.3)',
    borderTop: '5px solid white',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  },
};

export default SplashScreen;
