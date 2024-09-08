import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter, IoMail, IoLogoInstagram, IoLogoFacebook, IoLogoWhatsapp, IoLogoYoutube } from 'react-icons/io5';
import '../Styles/Footer.scss';
import Lottie from 'lottie-react';
import ufo from './ufo.json';
import Anim from './Animation - 1723750562058.json';
import { Box, Grid } from '@mui/material';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section footer__section--about">
        <Grid item xs={12} md={6}>
          <Box className='cont-img'>
            <Lottie animationData={Anim} loop={true} />
          </Box>
        </Grid>
        </div>
        <div className="footer__section footer__section--social">
          <h2 className="footer__title">&lt; let's Connect 🔎 /&gt;</h2>

          <div className="footer__icons">
            <a href="https://www.linkedin.com/in/devtech01/" target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin />
            </a>
            <a href="https://github.com/DevRajput01" target="_blank" rel="noopener noreferrer">
              <IoLogoGithub />
            </a>
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
              <IoLogoTwitter />
            </a>
            <a href="mailto:devtech0108@gmail.com">
              <IoMail />
            </a>
          </div>

          <div className="footer__icons">
            <a href="https://www.instagram.com/devrajput0108/" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100013174096680" target="_blank" rel="noopener noreferrer">
              <IoLogoFacebook />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100013174096680" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp />
            </a>
            <a href="https://www.youtube.com/@Codzzburner" target="_blank" rel="noopener noreferrer">
              <IoLogoYoutube />
            </a>
          </div>
        </div>
        <div className="footer__section footer__section--contact">
          <h2 className="footer__title">Contact Information</h2>
          <p className="footer__text">📧 Email: Devtech0108@gmail.com</p>
          <p className="footer__text"> ☎️ Phone: (+91) 9570161981</p>
        </div>
      </div>
      <p className="footer__text">&copy; All rights reserved Devendra Singh.🌍 </p>
    </footer>
  );
};

export default Footer;