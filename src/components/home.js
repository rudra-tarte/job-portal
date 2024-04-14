import React from 'react';
import Navbar from './navbar';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useDispatch, useSelector} from 'react-redux'; 
import { addUser } from '../redux/userSlice';
import { useEffect } from 'react';


export default function Home() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.users);

  useEffect( () => {
    
    //dispatch(addUser("rudra"));
 
},[]);


  

  return (
   
    <div>
      <Navbar></Navbar>
      {/* <h1>{user}</h1> */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'20px'}}>
      <Card sx={{ maxWidth: 745 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Rudra Tarte"
        subheader="Northeastern student"
      />
      <CardMedia
        component="img"
        height="194"
        image={`http://localhost:3000/images/netflix.png`}
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'20px'}}>
      <Card sx={{ maxWidth: 745 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} >
            D
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Tanvi Deshpande"
        subheader="Northeastern student"
      />
      <CardMedia
        component="img"
        height="194"
        image={`http://localhost:3000/images/amazon.png`}
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card>
    </div>

    

    
    </div>
  )
}
