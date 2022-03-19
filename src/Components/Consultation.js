import React from 'react'
import image from './consult_backgroung.jpg'
import './Consult.css'
export default function Consultation() {
  return (
   <div style={{position:'absolute',top:'3300px',width:'100vw',height:'35vh',backgroundSize:'cover',backgroundPosition:"center center",color:'white'}} className="main">
       <h4 style={{position:'absolute',left:'100px',top:'80px',fontSize:'35px',fontWeight:600}}>Free consultation with exceptional quality</h4>
        <p style={{position:'absolute',left:'100px',top:'170px',fontSize:'24px',fontWeight:400}}>Just one call away: +84 1102 2703</p>
        <button style={{position:'absolute',left:'1000px',top:'120px',width:'210px',height:'40px',border:'3px solid white',backgroundColor:'transparent',color:'white',borderRadius:'2px'}}>Get Your Consultation</button>
   
   </div>
  )
}
