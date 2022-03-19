import React from 'react'
import logo from './logo.svg'
import fb from './social icons/fb_icon.svg'
import li from './social icons/linkedin.svg'
import tw from './social icons/twitter.svg'
export default function Address() {
  return (
    <div style={{position:'relative',top:'3650px',height:'45vh',display:'flex'}}>
        <div>
            <ul style={{listDecoration:'none'}}>
                <li style={{display:'flex',justifyContent:'space-around',width:'38vw'}}><p style={{color:'#2947A9',fontSize:'25px',fontWeight:'500'}}>Address:</p><p style={{color:'#292E3D',fontSize:'25px'}}>6391 Elgin St. Celina, Delaware 10299</p></li>
                <li style={{display:'flex',justifyContent:'space-around',width:'20vw'}}><p style={{color:'#2947A9',fontSize:'25px',fontWeight:'500'}}>Phone:</p><p style={{color:'#292E3D',fontSize:'25px'}}>+84 1102 2703</p></li>
                <li style={{display:'flex',justifyContent:'space-around',width:'23vw'}}><p style={{color:'#2947A9',fontSize:'25px',fontWeight:'500'}}>Email:</p><p style={{color:'#292E3D',fontSize:'27px'}}>hello@thebox.com</p></li>
                <li style={{display:'flex',width:'30vw',marginLeft:'120px',marginTop:'40px'}}><img src={logo}/>
                <p style={{color:"#2947A9",fontSize:'30px',fontWeight:'700',marginLeft:'20px',width:'111px',height:'35px'}}><i>The</i>Box</p></li>
            </ul>
        </div>
        <div>
        <ul style={{listStyleType:'none'}}>
                <li style={{color:'#2947A9',fontWeight:'500'}}>NEWSLETTER</li>
                <li style={{display:'flex',marginTop:'30px'}}>
                    <input style={{width:'280px',height:'41px'}}/>
                    <button style={{border:'none',backgroundColor:'#F9995D',color:'white',width:'120px',marginLeft:'20px',borderRadius:'4px',fontSize:'20px'}}>Submit</button>
                </li>
                <li style={{color:'#2947A9',fontWeight:'500'}}>SOCIAL</li>
                <li style={{display:'flex',justifyContent:'space-between',width:'13vw'}}>
                    <img src={fb}/>
                    <img src={li}/>
                    <img src={tw}/>
                </li>
            </ul>
        </div>
    </div>
  )
}
