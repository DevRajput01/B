import React from 'react';
import { Box } from '@mui/material';
import '../Styles/Main1.scss';
import myPic33 from '../Styles/mypic33.jpg';

const Main1 = () => {
  return (
    <div className="home-container">
      <div className="picture">
        <img src={myPic33} alt="Devendra Singh" />
      </div>
      <Box className="details">
        <h6>Hello, It's me 👋🏽</h6> <h4>Devendra Singh</h4>
       
        <p>
          I am Frontend Developer with experience of 3 Months in Frontend (React.js) Development at StayFlexi (Bangalore).
          <br />
          I'm also interested in Graphic Design and working as a Graphic Designer at T & P cell, MIMIT Malout.
        </p>
      </Box>
    </div>
  );
};

export default Main1;
