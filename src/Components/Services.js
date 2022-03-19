import React from 'react'
import { Card } from 'react-bootstrap'
import icon_1 from './ServiceIcons/icon.jpg'
import icon_2 from './ServiceIcons/icon_2.svg'
import icon_3 from './ServiceIcons/icon_3.jpg'
import icon_4 from './ServiceIcons/icon_4.svg'
import icon_5 from './ServiceIcons/icon_5.jpg'
import icon_6 from './ServiceIcons/icon_6.svg'
export default function Services() {
  return (
    <div style={{backgroundColor:'#F6F8F7',width:'100vw',height:'620px',position:'absolute',top:'2004px'}}>
        <h3 style={{marginTop:'30px'}}>Services</h3>
       <div style={{display:'flex',justifyContent:'space-around',marginRight:'10vw',marginLeft:'10vw',marginTop:'50px'}}>
    <Card style={{ width: '18rem',height:'200px' }} data-aos="flip-left" >
         <Card.Body>
        <Card.Title><img src={ icon_1} style={{width:'40px',marginTop:'20px'}} /></Card.Title>
        <Card.Subtitle style={{ height:'2px',width:'80px',backgroundColor:'#E0E3EB',position:'absolute',left:'102px',top:'100px'}}></Card.Subtitle>
        <Card.Text style={{position:'absolute',top:'120px',left:'75px',fontSize:'25px',color:'#2947A9',fontWeight:600}}>
        Construction
        </Card.Text>
    
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem',height:'200px',backgroundColor:'#2947A9' }} data-aos="flip-left" data-aos-delay='200'>
         <Card.Body>
        <Card.Title><img src={ icon_2} style={{width:'40px',marginTop:'20px'}} /></Card.Title>
        <Card.Subtitle style={{ height:'2px',width:'80px',backgroundColor:'#E0E3EB',position:'absolute',left:'102px',top:'100px'}}></Card.Subtitle>
        <Card.Text style={{position:'absolute',top:'120px',left:'75px',fontSize:'25px',color:'white',fontWeight:600}}>
        Rennovation
        </Card.Text>
    
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem',height:'200px' }} data-aos="flip-left" data-aos-delay='400'>
         <Card.Body>
        <Card.Title><img src={ icon_3} style={{width:'40px',marginTop:'20px'}} /></Card.Title>
        <Card.Subtitle style={{ height:'2px',width:'80px',backgroundColor:'#E0E3EB',position:'absolute',left:'102px',top:'100px'}}></Card.Subtitle>
        <Card.Text style={{position:'absolute',top:'120px',left:'75px',fontSize:'25px',color:'#2947A9',fontWeight:600}}>
        Consultation
        </Card.Text>
    
        </Card.Body>
    </Card>
    
    </div>
    <div style={{display:'flex',justifyContent:'space-around',marginRight:'10vw',marginLeft:'10vw',marginTop:'50px'}}>
    <Card style={{ width: '18rem',height:'200px',backgroundColor:'#2947A9' }} data-aos="flip-left">
         <Card.Body>
        <Card.Title><img src={ icon_4} style={{width:'40px',marginTop:'20px'}} /></Card.Title>
        <Card.Subtitle style={{ height:'2px',width:'80px',backgroundColor:'#E0E3EB',position:'absolute',left:'102px',top:'100px'}}></Card.Subtitle>
        <Card.Text style={{position:'absolute',top:'120px',left:'65px',fontSize:'25px',color:'white',fontWeight:600}}>
        Repair Services
        </Card.Text>
    
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem',height:'200px',backgroundColor:'white' }} data-aos="flip-left" data-aos-delay='200'>
         <Card.Body>
        <Card.Title><img src={ icon_5} style={{width:'40px',marginTop:'20px'}} /></Card.Title>
        <Card.Subtitle style={{ height:'2px',width:'80px',backgroundColor:'#E0E3EB',position:'absolute',left:'102px',top:'100px'}}></Card.Subtitle>
        <Card.Text style={{position:'absolute',top:'120px',left:'70px',fontSize:'25px',color:'#2947A9',fontWeight:600}}>
        Architechture
        </Card.Text>
    
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem',height:'200px',backgroundColor:'#2947A9' }} data-aos="flip-left" data-aos-delay='400'>
         <Card.Body>
        <Card.Title><img src={ icon_6} style={{width:'40px',marginTop:'20px'}} /></Card.Title>
        <Card.Subtitle style={{ height:'2px',width:'80px',backgroundColor:'#E0E3EB',position:'absolute',left:'102px',top:'100px'}}></Card.Subtitle>
        <Card.Text style={{position:'absolute',top:'120px',left:'105px',fontSize:'25px',color:'white',fontWeight:600}}>
        Electric
        </Card.Text>
    
        </Card.Body>
    </Card>
    
    </div>
        

    </div>
  )
}
