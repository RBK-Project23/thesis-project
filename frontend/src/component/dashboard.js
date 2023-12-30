import React from 'react';
import './dashborad.css';

import DenseTable from './usertable'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Dashboard() {
 
  const [users, setUsers] = useState([]);

  const updateStatus= async(email,initialStatus)=>{
     try{
     
      const status = !initialStatus;
      console.log('email: '+email,'status :'+status);
      const confirmUser = window.confirm(!initialStatus?'Are you sure you want to confirm this user?':'Are you sure you want to pend this user?');
      if(confirmUser){
      
         const response = await axios.post('http://localhost:7000/users/updateStatus', {email, status});
       console.log(response);
       window.location.reload();
     
      }
      

     }
     catch (err){
      console.log(err);

     }
  }

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
    const fetchUsers = async () => {
      try {
        
        const resp = await axios.get('http://localhost:7000/users/getuser'); 

       
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
       
       <DenseTable users ={users} deleteUser={deleteUser} updateStatus={updateStatus} />
        
     </div>


    </div> 
    </div>
    </>
  )
}
