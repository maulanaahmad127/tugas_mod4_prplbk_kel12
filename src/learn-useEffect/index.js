import React, { useState, useEffect } from 'react';
import '../App.css';

function BasicEffect() {

  const [title, setTitle] = useState('Klik layar dimanapun');
  
  useEffect(() => {
    const listener = () => {
      setTitle(`Haloo kami dari Kelompok 12`);
    };
    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  }, []);

  return (
    <div className="App">
      <h2>{title}</h2>
      <h4>Click the screen to listen the click event</h4>
    </div>
  );
}

export default BasicEffect;