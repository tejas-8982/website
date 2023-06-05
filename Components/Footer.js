import React from 'react'
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Footer = () => {
  return (
    <div className='footer'>
    <div className='contactus'>
    <h4>Contact us</h4>
      <LocationOnIcon /> 23 Sir M. Visvesvaraya Marg,<br/>
       Indore, Madhya Pradesh 452003<br/>
       <PhoneAndroidIcon /> +91XXXXXXXXX 
    </div>
    <h4>Useful Links</h4>
    <div className='links'>
    
    <ul>
    <li> <Link to='/'>Home</Link><br/> </li>
    <li> <Link to='/'>Contact</Link></li>
    <li> <Link to='/'>Team</Link> </li>
    
    </ul>
    </div>
    <div className='ojaswa'>
    <p>Made with <span className="heart">&#10084;</span> by <Link to='/webteam'>Web-Team</Link></p>
      <p>&copy; 2023 Club Ojaswa. All Right Reserved.</p>
    </div>
   
    <div className='logos'>
        <InstagramIcon className='icon' style={{ color: '#C32AA3'}} />
        <LinkedInIcon className='icon' style={{ color: '#0077B5' }} />
        <FacebookIcon className='icon' style={{ color: '#1877F2' }} />
    </div>
    </div>
  )
}

export default Footer
