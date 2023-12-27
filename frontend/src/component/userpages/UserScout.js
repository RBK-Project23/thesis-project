import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScoutForm from '../Scout/ScoutForm';
import Footer from "../footer";

const UserProfilScout = () => {
  const [ scouts, setScouts] = useState([]);

  useEffect(() => {
    const fetchScouts = async () => {
      try {
        const response = await axios.get('http://localhost:7000/scouts');
        setScouts(response.data);
      } catch (error) {
        console.error('Error fetching scouts:', error);
      }
    };

    fetchScouts();
  }, []);

  const handleScoutAdded = (newScout) => {
    setScouts([...scouts, newScout]);
  };

  return (
    <div>
      <ScoutForm onScoutAdded={handleScoutAdded} />
      <Footer />
    </div>
  );
};

export default UserProfilScout;
