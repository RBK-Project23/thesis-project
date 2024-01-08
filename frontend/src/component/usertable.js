import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import './usertable.css'


export default function DenseTable({users, deleteUser,updateStatus}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

 
  const filteredUsers = selectedFilter
    ? users.filter((user) => {
       
        switch (selectedFilter) {
          case 'commander':
            return user.type_user.toLowerCase().includes(selectedFilter);
          case 'scout':
            return user.type_user.toLowerCase().includes(selectedFilter);
          case 'parent':
            return user.type_user.toLowerCase().includes(selectedFilter);
          
          default:
            return true;
        }
      })
    : users;


  const indexOfLastItem = currentPage * 6;
  const indexOfFirstItem = indexOfLastItem - 6;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(users.length / 6); i++) {
    pageNumbers.push(i);
  };

  



  const status = (email,status)=>{
    if(status){return (
      <Button variant="contained" color="success" size = 'small' onClick={() => updateStatus(email,status)} >
      confirmed
    </Button>

    )}
    else {return (
      <Button variant="outlined" color="error" size = 'small'  onClick={() => updateStatus(email,status)}
              
              >pendding</Button>

    )}
  }
  return (
    <TableContainer component={Paper} style={{background:'transparent', marginTop:'0vh', color:'black'}}>
     <h2 style={{textAlign:'center', padding:'1vh'}}> User list</h2>
     <button id='cli'>Generate PDF</button>
     <label for="mySelect" id='labelFilter'>Filter by :  </label>
    <select id="mySelect" name="options" onChange={handleFilterChange}>
        <option value="">All users</option>
        <option value="parent">Parent</option>
        <option value="commander">Commander</option>
        <option value="scout">Scout</option>
        
    </select>
     
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow >
            <TableCell style={{ color:'black'}}> Name</TableCell>
            <TableCell align="right" style={{ color:'black'}}>Last Name</TableCell>
            <TableCell align="right" style={{ color:'black'}}>E-mail</TableCell>
            <TableCell align="right" style={{ color:'black'}}>Position</TableCell>
            <TableCell align="right" style={{ color:'black'}}>Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {currentItems.map((user) => (
            <TableRow
              key={user.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ color:'black'}} >
                {user.firstName}
              </TableCell>
              <TableCell align="right" style={{ color:'black'}}>{user.lastName}</TableCell>
              <TableCell align="right" style={{ color:'black'}}>{user.email}</TableCell>
              <TableCell align="right" style={{ color:'black'}}>{user.type_user}</TableCell>
              <TableCell align="right" style={{ color:'black'}}>{status(user.email, user.status)}</TableCell>
                  <TableCell align="right" style={{ color:'black'}}>
              <Button variant="outlined"  startIcon={<DeleteIcon />} size = 'small' onClick={() => deleteUser(user._id)}
              
              >Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='pages'>
      {pageNumbers.map(number => (
    <button className='page' key={number} onClick={() => setCurrentPage(number)}>
      {number}
    </button>
  ))}
      </div>
 
    </TableContainer>
    
  );
 
}