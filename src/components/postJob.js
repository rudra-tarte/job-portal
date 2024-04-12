import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';



export default function PostJobs() {

    const navigate = useNavigate()

    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [salary, setSalary] = useState('');
    const [description, setDescription] = useState('');

    let data = JSON.stringify({
        "company": company,
        "title": title,
        "salary":salary,
        "description":description
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/create/job',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };


      const handlePost = async (event) => {
        event.preventDefault();
        try{
          const response = await axios.request(config);
          navigate("/home")
        } catch(error){
          console.log(error)
        }
      }


  return (
    <div>
        <Navbar></Navbar>
        <Grid container component="main" sx={{ height: '100vh' }}>
    
            <Grid item xs={8} sm={8} md={12} component={Paper} elevation={6} square>
            <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
    
        <Box component="form" noValidate onSubmit={event=>handlePost(event)} sx={{ mt: 5 }}>
            <h4 style={{ marginBottom: 2, paddingBottom: 2 }} >Company</h4>
          <TextField
            required
            fullWidth
            id="company"
            name="company"
            autoComplete="company"
            autoFocus
            onChange={(e) => setCompany(e.target.value)}
          />
          <br></br>
            <h4 style={{ marginBottom: 2, paddingBottom: 2 }} >Title</h4>
          <TextField
            required
            fullWidth
            name="title"
            type="title"
            id="title"
            autoComplete="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br></br>
            <h4 style={{ marginBottom: 2, paddingBottom: 2 }} >Salary</h4>
          <TextField
            required
            fullWidth
            name="salary"
            type="salary"
            id="salary"
            autoComplete="salary"
            onChange={(e) => setSalary(e.target.value)}
          />

            <br></br>
            <h4 style={{ marginBottom: 2, paddingBottom: 2 }} >Description</h4>
          <TextField
            required
            fullWidth
            name="description"
            type="description"
            id="description"
            autoComplete="description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ backgroundColor: 'black', color: 'white', borderRadius: '20px' }}
            sx={{ mt: 3, mb: 2 }}
          >
            Post
          </Button>
        </Box>
            </Box>
            </Grid>
        </Grid>
    </div>
  )
}
