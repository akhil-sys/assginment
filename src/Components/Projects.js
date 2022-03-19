import React from 'react'
import { Card } from 'react-bootstrap'
import './Projects.css'
import image1 from './Project_photos/1.jpg'
import image2 from './Project_photos/2.jpg'
import image3 from './Project_photos/3.jpg'
import image4 from './Project_photos/4.jpg'
import arrow from './front_arrow (1).svg'
import back_arrow from './front_arrow (2).svg'
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
export default function Projects() {
  return (
    <div style={{position:'absolute',top:'3700px',width:'100vw',height:'80vh',display:'flex',justifyContent:'space-between'}}>
        <div className='list' style={{width:'300px'}}>
        <ul style={{listStyle:'none'}}>
            <li><h4 style={{fontSize:'36px',color:'#292E3D',marginBottom:'40px',position:'relative',left:'-20px'}}>Projects</h4></li>
            <li style={{color:'#2947A9',borderLeft:'4px solid #2947A9', fontWeight:700}}>All</li>
            <li>Commerical</li>
            <li>Residential</li>
            <li>Other</li>
        </ul>
        </div>
        <div style={{marginRight:'115px'}}>
            <div style={{display:'flex',width:'57vw',justifyContent:'space-around'}}>
            <Card style={{border:'none'}}>
                <Card.Body>
                    <img src={image1}/>
                    <Card.Text style={{backgroundColor:"#2947A9",color:'white' ,textAlign:'left',height:'85px',padding:'12px 12px 16px',width:'384px'}}>
                        <h5>Wildstone Infra Hotel</h5>
                        <p>2715 Ash Dr. San Jose, South Dakota</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{border:'none',marginBottom:'10px'}}>
                <Card.Body>
                    <img src={image2}/>
                    <Card.Text style={{backgroundColor:"#2947A9",color:'white' ,textAlign:'left',height:'85px',width:'384px',padding:'12px 12px 16px'}}>
                        <h5>Wish Stone Building</h5>
                        <p>2972 Westheimer Rd. Santa Ana, Illinois </p>
                    </Card.Text>
                </Card.Body>
            </Card>
            
            </div>
            <div style={{display:'flex',width:'57vw',justifyContent:'space-around'}}>
            <Card style={{border:'none'}}>
                <Card.Body>
                    <img src={image3}/>
                    <Card.Text style={{backgroundColor:"#2947A9",color:'white' ,textAlign:'left',height:'85px',width:'',padding:'12px 12px 16px',width:'384px'}}>
                        <h5>Mr. Parkinston’s House</h5>
                        <p>3517 W. Gray St. Utica, Pennsylvania</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{border:'none',marginBottom:'40px'}}>
                <Card.Body>
                    <img src={image4}/>
                    <Card.Text style={{backgroundColor:"#2947A9",color:'white' ,textAlign:'left',height:'85px',padding:'12px 12px 16px',width:'384px'}}>
                        <h5>Oregano Height</h5>
                        <p>2464 Royal Ln. Mesa, New Jersey  </p>
                    </Card.Text>
                </Card.Body>
            </Card>
            
            </div>
            <div style={{width:'825px',height:'70px',alignItems:'center',position:'relative',left:'25px',display:'flex',color:'white',fontSize:'18px'}}>
                <div style={{backgroundColor:'#292E3D', width:'300px',height:'80%',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                
                <img src={back_arrow} style={{margin:'10px'}}/>
                Back</div>
                <div style={{width:'225px',display:'flex'}}>
                    <div style={{width:'16px',height:'16px',backgroundColor:'#2947A9',margin:'16px',borderRadius:'8px'}}></div>
                    <div style={{width:'16px',height:'16px',backgroundColor:'#F6F8F7',margin:'16px',borderRadius:'8px'}}></div>
                    <div style={{width:'16px',height:'16px',backgroundColor:'#F6F8F7',margin:'16px',borderRadius:'8px'}}></div>
                    <div style={{width:'16px',height:'16px',backgroundColor:'#F6F8F7',margin:'16px',borderRadius:'8px'}}></div>

                </div>
                <div style={{backgroundColor:'#292E3D', width:'300px',height:'80%',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                   Next <img src={arrow} style={{margin:'10px'}}/>
                    </div>
            </div>
            
        </div>
    </div>
  )
}
