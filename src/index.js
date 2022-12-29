import React from 'react';
import ReactDOM from 'react-dom/client';
// import Hook1 from './Hook1';
import './index.css';
import Nav1 from './Navbar/Nav1';
import Home from './Home/Home';
// import Mdbreact from './Mdbreact';
// import Rbootstrap from './Rbootstrap';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import Spread from './Spread';
// import Trial from './Trial';
// import { Card } from '@mui/material';
// import Card from './Card';
// import Icon from './Icon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Card /> */}
    {/* <Icon /> */}
    {/* <Hook1 /> */}
    {/* <Rbootstrap /> */}
    {/* <Mdbreact /> */}
    {/* <Login /> */}
    {/* <Spread /> */}
    {/* <Trial /> */}
    <Nav1 />
    <Home />
  </React.StrictMode>
);


reportWebVitals();
