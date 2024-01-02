import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function InputSelect({ onRoleChange }) {
 
  
    const type = [
      { label: 'scout' },
      { label: 'commander' },
      { label: 'parent'}
    ];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={type}
      sx={{ width: 500}}
      onChange={(event, value) => onRoleChange(value ? value.label : '')}
      renderInput={(params) => <TextField {...params} label="who you are?" />}
     
    />
  );
}


