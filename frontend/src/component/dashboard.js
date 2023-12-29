import React from 'react';
import './dashborad.css';

import DenseTable from './usertable'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const deleteUser = async (userId) => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this user?');

      if(confirmDelete){
         await axios.delete(`http://localhost:7000/tech/delete/${userId}`);
      // Update the users state to reflect the deletion
      const updatedUsers = users.filter(user => user.id !== userId);
      setUsers(updatedUsers);
      }
     
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };


  useEffect(() => {
    // Inner function that calls the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:7000/products'); 
         

        setProducts(response.data);
       
      
      
      } catch (error) {
        console.error('Error fetching products:', error);
       
      }
    };
 

   
    fetchProducts();
  }, []);

  useEffect(() => {
    // Inner function that calls the API
    const fetchUsers = async () => {
      try {
        
        const resp = await axios.get('http://localhost:7000/tech/getAllUsers'); 

       
        setUsers(resp.data);
        console.log(resp.data);
      
      } catch (error) {
        console.error('Error fetching users:', error);
       
      }
    };
 

   
    fetchUsers();
  }, [])

  return (
    <>
    <div id='body'>
     <div class="dashboard-container">
     <div id="dashboard-title">
        <h1>DASHBORAD ADMINISTRATOR </h1>
     
     </div>
     
     <div class="dashboard-tab">
       
       <DenseTable users ={users} deleteUser={deleteUser} />
        
     </div>


    </div> 
    </div>
    </>
  )
}
