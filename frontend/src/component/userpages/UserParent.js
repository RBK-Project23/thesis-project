import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ParentForm from '../parent/ParentForm';

const UserProfilParent = () => {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get('http://localhost:7000/parents');
        setParents(response.data);
      } catch (error) {
        console.error('Error fetching parents:', error);
      }
    };

    fetchParents();
  }, []);

  const handleParentAdded = (newParent) => {
    setParents([...parents, newParent]);
  };

  return (
    <div>
      <ParentForm onParentAdded={handleParentAdded} />
    </div>
  );
};

export default UserProfilParent;
