import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommanderForm from '../commander/CommanderForm';
import Footer from "../footer";

const UserProfilCommander = () => {
  const [commanders, setCommanders] = useState([]);

  useEffect(() => {
    const fetchCommanders = async () => {
      try {
        const response = await axios.get('http://localhost:7000/commanders');
        setCommanders(response.data);
      } catch (error) {
        console.error('Error fetching commanders:', error);
      }
    };

    fetchCommanders();
  }, []);

  const handleCommanderAdded = (newCommander) => {
    setCommanders([...commanders, newCommander]);
  };

  return (
    <div>
      <CommanderForm onCommanderAdded={handleCommanderAdded} />
      <Footer />
    </div>
  );
};

export default UserProfilCommander;
