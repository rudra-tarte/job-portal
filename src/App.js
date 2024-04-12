import * as React from 'react';
import './App.css';
import Login from './components/login'; 
import {Routes, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Listing from './components/listing';
import Contact from './components/contact';
import Companies from './components/companies';
import Employee from './components/employee';
import AuthProvider from './components/auth';
import RequireAuth from './components/requireAuth';
import PostJobs from './components/postJob';

function App() {

  return (
    
    <AuthProvider>
      
      <Routes>
      <Route path='/' element={<Login/>}  ></Route>
      <Route path='/home' element={ <RequireAuth><Home/></RequireAuth> }></Route>
      <Route path='/home' element={ <Home/> }></Route>
      <Route path='/about' element={<RequireAuth><About/></RequireAuth>}></Route>
      {/* <Route path='/listing' element={<RequireAuth><Listing/></RequireAuth>}></Route> */}
      <Route path='/listing' element={<Listing/>}></Route>
      <Route path='/contact' element={<RequireAuth><Contact/></RequireAuth>}></Route>
      <Route path='/showcase' element={<RequireAuth><Companies/></RequireAuth>}></Route>
      {/* <Route path='/employee' element={<RequireAuth><Employee/></RequireAuth>}></Route> */}
      <Route path='/employee' element={<Employee/>}></Route>
      <Route path='/postjob' element={<PostJobs/>}></Route>
    </Routes>
    </AuthProvider>
  );
}

export default App;
