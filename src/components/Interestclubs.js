import React from 'react'

const Interestclubs = () => {
  return (
    <div id='ic-container'>
        <h1>Interest Clubs</h1>
        <div className='logo-container' style={{height: '50vh'}}>
            <div className='logo' style={{background: `url(${process.env.PUBLIC_URL}/images/coders.png) center center/cover`}}> 
              <h2> CODERS' GUILD </h2>
            </div>
            <div className='logo' style={{background: `url(${process.env.PUBLIC_URL}/images/designers.png) center center/cover`}}>
              <h2> DESIGNERS' GUILD </h2>
            </div>
            <div className='logo' style={{background: `url(${process.env.PUBLIC_URL}/images/cyber.png) center center/cover`}}>
              <h2> CYER SECURITY TEAM </h2>
            </div>
        </div>
    </div>
  )
}

export default Interestclubs