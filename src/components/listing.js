import React, { useEffect } from 'react';
import Navbar from './navbar';
import { Grid, Paper, Button } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

export default function Listing() {

  const [jobs, setJobs] = React.useState([]);
  const [selectedJob, setSelectedJob] = React.useState({});

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/get/job',
    headers: { 
      'Content-Type': 'application/json'
    }
  };

  async function getJob()
  {
    try{
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      setJobs(response.data);

      
    } catch(error){
      console.log(error)
      console.log(error.response.status);
      
    }
  }



  useEffect( () => {
    
       getJob();
    
  },[]);

  

  const handleClick = async (id) => {
    console.log(id);
    const [job] = jobs.filter(job => job._id === id);
    setSelectedJob(job);
  }
 
  return (
    <>
    
      <Navbar></Navbar>
      <div style={
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }
      }>
        <Grid container>
          <Grid item xs={12}>
            <Paper>
              <Grid item xs={4} md={12}>
                <List>
                  {
                    jobs.map((job) => {
                      return (
                        <ListItem key={job._id} onClick={() => handleClick(job._id)}>
                          <ListItemText primary={job.title} />
                        </ListItem>
                      )
                    })
                  }
                </List>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <div style={
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }
      }>
      <Grid item xs={12} sx={{ width: 1045 }} >
          <div style={{
              padding: "20px"
            }} >
              {
                selectedJob?.title ?
                  <Paper>
                    <h1 >{selectedJob.title}</h1>
                    <p>{selectedJob.company}</p>
                    <p>{selectedJob.description}</p>
                    <p>{selectedJob.salary}</p>
                    <Button href={selectedJob.applyLink}>Apply</Button>
                  </Paper> :
                  <Paper>
                    <h1>Click on a job to view details</h1>
                  </Paper>
              }
            </div>
          </Grid>
          </div>

    </>
  )
}
