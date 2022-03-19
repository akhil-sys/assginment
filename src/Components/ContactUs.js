import React from 'react'
import { Card } from 'react-bootstrap'
import illu_1 from './ContactUsIcons/illus.jpg'
import illu_2 from './ContactUsIcons/illus (1).jpg'
import illu_3 from './ContactUsIcons/illus (2).jpg'
import illu_4 from './ContactUsIcons/illus (3).jpg'
export default function ContactUs() {
  return (
    <div style={{position:'relative',width:'100vw',height:'80vh',top:'1450px'}}>
        <Card style={{ width: '16rem',height:'150px',position:'absolute',top:'150px',left:'512px',zIndex:1 ,boxShadow:'0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)'}} data-aos="fade-up">
         <Card.Body>
        <Card.Title style={{fontSize:'52px',fontWeight:700,position:'absolute',left:'30px'}}>84</Card.Title>
        <Card.Text >
        <p style={{borderLeft:'5px solid #F9995D',width:'150px',fontSize:'20px',position:'relative',top:'70px',left:'35px'}}>Happy Clients</p>
        <img src={illu_1} style={{width:'93px',position:'absolute',top:'-20px',left:'210px'}}/>
        </Card.Text>
    
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem',height:'150px',position:'absolute',top:'221px',left:'242px',boxShadow:'0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)'}} data-aos="fade-up">
         <Card.Body>
        <Card.Title style={{fontSize:'52px',fontWeight:700,position:'absolute',left:'30px'}}>123</Card.Title>
        <Card.Text >
        <p style={{borderLeft:'5px solid #F9995D',width:'200px',fontSize:'20px',position:'relative',top:'70px',left:'25px'}}>Projects Completed</p>
        <img src={illu_2} style={{width:'80px',position:'absolute',top:'-20px',left:'-40px'}}/>
        </Card.Text>
    
        </Card.Body>
    </Card>

    <Card style={{ width: '16rem',height:'150px',position:'absolute',top:'364px',left:'458px',zIndex:1,boxShadow:'0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)' }} data-aos="fade-up">
         <Card.Body>
        <Card.Title style={{fontSize:'52px',fontWeight:700,position:'absolute',left:'30px'}}>37</Card.Title>
        <Card.Text >
        <p style={{borderLeft:'5px solid #F9995D',width:'140px',fontSize:'20px',position:'relative',top:'65px',left:'35px'}}>Awards Won</p>
        <img src={illu_3} style={{width:'80px',position:'absolute',top:'-10px',left:'210px'}}/>
        </Card.Text>
    
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem',height:'150px',position:'absolute',top:'469px',left:'261px',boxShadow:'0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)' }} data-aos="fade-up">
         <Card.Body>
        <Card.Title style={{fontSize:'52px',fontWeight:700,position:'absolute',left:'30px'}}>30</Card.Title>
        <Card.Text >
        <p style={{borderLeft:'5px solid #F9995D',width:'170px',fontSize:'20px',position:'relative',top:'70px',left:'35px'}}>Years in Business</p>
        <img src={illu_4} style={{width:'80px',position:'absolute',top:'85px',left:'230px'}}/>
        </Card.Text>
    
        </Card.Body>
    </Card>
    <Card style={{width:'27vw',position:'absolute',left:'970px',top:'250px',border:'none'}}>
        <Card.Body>
            <Card.Title style={{fontSize:'60px',fontWeight:600,color:'#2947A9',lineHeight:'63px',marginBottom:'50px',textAlign:'left'}} className="text-left">30 Years Experience</Card.Title>
            <Card.Text style={{fontSize:'20px',textAlign:'left',color:'#525B7A'}} className='text-left'>Our company has been the leading provided construction services to clients throughout the USA since 1988</Card.Text>
            <button style={{float:'left',width:'150px',height:'40px',border:'none',color:"white",backgroundColor:'#2947A9',borderRadius:'2px',fontSize:'17px'}}>Contact Us</button>
        </Card.Body>
    </Card>
    </div>
  )
}
