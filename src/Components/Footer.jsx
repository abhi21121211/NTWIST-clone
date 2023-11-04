import React from 'react';
import { FiTwitter,FiLinkedin } from 'react-icons/fi';
function Footer() {
  const linkStyle = {
    color: 'white', // Add your desired color
    textDecoration: 'none', // Remove underline
    
  };

  return (
    <div>
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '350px',
        background: '#081528',
      }} className='footerCon'>
        <div style={{ padding: '10px 0px' }}>
          <img style={{ width: '100px' }} src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="NTWIST Logo" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '500px', padding:"10px 0px"}}>
          <a style={linkStyle} href="/">Home</a>
          <a style={linkStyle} href="/">About Us</a>
          <a style={linkStyle} href="/contactus">Contact Us</a>
          <a style={linkStyle} href="/">Privacy Policy</a>
          <a style={linkStyle} href="/">Sitemap</a>
        </div>
        <p style={{color:"#6f7f92", padding:"10px opx"}}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
        <div  style={{ padding: '10px 0px' }}>
           
            <i style={{color:"white" ,fontSize:"20px", padding:"0px 10px"}}><FiTwitter/></i>

            <i style={{color:"white" ,fontSize:"20px",padding:"0px 10px"}}><FiLinkedin/></i>
            
        </div>
        <p style={{color:"#6f7f92", padding:"10px opx"}}>© 2022. Ntwist Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
