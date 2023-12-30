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









export default function DenseTable({users, deleteUser,updateStatus}) {
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
          {users.map((user) => (
            <TableRow
              key={user.firstNme}
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
              <Button variant="outlined"  startIcon={<DeleteIcon />} size = 'small' onClick={() => deleteUser(user.id)}
              
              >Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}