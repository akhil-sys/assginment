import React from 'react'
import { Card } from 'react-bootstrap'
import icon from './icon.jpg'
import icon_2 from './3rdicon.jpg'
export default function CardList() {
  return (
    <div>
        <h2 style={{marginTop:'50px',marginBottom:'30px'}}>Our Reputation</h2>
        <div style={{display:'flex', justifyContent:'space-around',marginRight:'10vw',marginLeft:'10vw'}}>
        <Card style={{ width: '18rem',height:'200px' }} data-aos="flip-left">
  <Card.Body>
    <Card.Title><img src={ icon} /></Card.Title>
    <Card.Subtitle className="mb-4" style={{fontWeight:700}}>Best Services</Card.Subtitle>
    <Card.Text>
    Nullam senectus porttitor in eget. Eget rutrum leo interdum.
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem',height:'200px' }} data-aos="flip-left" data-aos-delay='200'>
  <Card.Body>
    <Card.Title><img src={icon} /></Card.Title>
    <Card.Subtitle className="mb-4" style={{fontWeight:700}}>Best Services</Card.Subtitle>
    <Card.Text>
    Nullam senectus porttitor in eget. Eget rutrum leo interdum.
    </Card.Text>


    
  </Card.Body>
</Card>
<Card style={{ width: '18rem',height:'200px' }} data-aos="flip-left" data-aos-delay='400'>
  <Card.Body>
    <Card.Title><img src={ icon_2} /></Card.Title>
    <Card.Subtitle className="mb-4" style={{fontWeight:700}}>Best Services</Card.Subtitle>
    <Card.Text>
    Nullam senectus porttitor in eget. Eget rutrum leo interdum.
    </Card.Text>
    
  </Card.Body>
</Card>
</div>
    </div>
  )
}
