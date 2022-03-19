import React from 'react'
import image from './proPic.jpg'
import './ProPic.css'
export default function ProPic() {
  return (
      <div style={{marginBottom:'50px'}}> 
    
        <img className='image' style={{width:'1090px',position:'absolute',left:'114px',marginTop:'100px'}} src={image}/>
        <div className='About' style={{color:'white',padding:'45px'}} data-aos='slide-left'> 
            <h5 style={{fontSize:'36px', marginBottom:'20px'}}>About Us</h5>
            <p style={{fontSize:'20px'}}>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.<br></br><br></br>
                
                We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>

        <button style={{backgroundColor:'white',position:'absolute',left:'40px',width:'220px',height:'55px',borderRadius:'6px',color:'#2947A9',fontSize:'18px',fontWeight:600,border:'none',top:'410px'}}>More on our history</button>
        </div>
    </div>
  )
}
