import React from 'react';
import Navbar from './navbar';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';

export default function Employee() {

  const [employee, setEmployee] = React.useState([]);

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/user/getAll',
    headers: { 
      'Content-Type': 'application/json'
    }
  };

  async function getEmployee()
  {
    try{
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      setEmployee(response.data);

      
    } catch(error){
      console.log(error)
      console.log(error.response.status);
      
    }
  }



  useEffect( () => {
    
       getEmployee();
       console.log(employee);
    
  },[]);

  

  return (
    <div>
        <Navbar></Navbar>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >First Name</TableCell>
            <TableCell >Last Name</TableCell>
            <TableCell >Role</TableCell>
            <TableCell >Email id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employee.map((row) => (
            <TableRow>
              <TableCell >{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell >{row.type}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );

}
