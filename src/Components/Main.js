import React from 'react'
import image from '../backGround.jpg'
import './Main.css'
import front from './front_arrow (1).svg'
import back from './front_arrow (2).svg'
export default function Main() {
  return (
    <div style={{width:'100vw',height:'90vh',WebkitBackgroundSize:'100%',backgroundRepeat:'no-repeat',position:'relative' }} className='main1'>
        <p className='mainText'> Building things is our mission.</p>
        <div className='FeatureProjects' style={{color:'white'}}>
            <h4> Feature Projects</h4>
            <p style={{fontSize:'21px',padding:'5px 9px'}}>The National University of Architechture </p>
            <div className='buttons' style={{width:'100%',display:'flex' ,color:'white'}}>
                <div className='BackButton' style={{fontSize:'18px',borderLeft:'2px solid white'}}>Next<img src={front} style={{margin:'0 10px'}}></img> </div>
                <div className='NextButton' style={{fontSize:'18px'}}><img src={back} style={{margin:'0 10px'}}/> Back</div>
                
            </div>
        </div>
    </div>
  )
}
