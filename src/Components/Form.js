import React from 'react'

export default function Form() {
  return (
    <div style={{width:'100vw',height:'67vh',backgroundColor:'#F6F8F7',position:'absolute',top:'4800px',display:'flex',flexDirection:'column'}}>
        <h2 style={{fontSize:'36px',position:'relative',top:'30px'}}>What can us do for you?</h2>
        <p style={{fontSize:'20px',position:'relative',top:'50px'}}>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
        <form style={{width:'60vw',position:'relative',top:'50px',left:'270px'}}>
        <div>
            <input type='text' placeholder='Your Name' style={{border: '1px solid #E0E3EB',margin: '10px 18px',width:'250px',height:'40px'}}/>
            <input type='email' placeholder='Email'style={{border: '1px solid #E0E3EB',margin: '10px 18px',width:'250px',height:'40px'}}/>
            </div>
            <div>
            <input list='list' style={{border: '1px solid #E0E3EB',margin: '10px 18px',width:'250px',height:'40px'}}/>
            <datalist id='list' placeholder='reason for coming'>
                <option value='value'/>
                <option value='reason for coming'/>
            </datalist>
            <input type='integer' placeholder='Phone number' style={{border: '1px solid #E0E3EB',margin: '10px 18px',width:'250px',height:'40px'}}/>
            </div>
            <textarea style={{border: '1px solid #E0E3EB',margin: '10px 18px',width:'533px',height:'120px',position:'relative',left:'100px'}}/>
            <input type='submit' style={{position:'relative',top:'50px',left:'-310px',color:'white',backgroundColor:'#2947A9',border:'none',width:'200px',height:'50px',borderRadius:'2px',fontSize:'18px'}}/>

        </form>
    </div>
  )
}
