import React from 'react'
import './Banner.css'
import Wave from 'react-wavify'

function Banner() {
    const App = () => (
        <Wave fill='#f79902'
              paused={false}
              options={{
                height: 20,
                amplitude: 20,
                speed: 0.15,
                points: 3
              }}
        />
      )
  return (
    <div className='banner'>
        <div className='details'>
            <div className='nameBox'>
                Hello,IAM
                <div className='name'>Ali Morshedlou</div>
            </div>
            <div className='creative_des'>Creative Designer</div>
            <div className='desc'>Freelancer Web/ Mobile UI/UX Designer with Motion Graphics</div>
            <button className='hiremeButton'>Hire Me</button>
            <button className='getResumeButton'>Get Resume</button>
        </div>
        <div className="profilebox">
                <div className="profileimg">
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="profile_pic"  alt="profile picture"></img>
                </div>
        </div>
        <div class="shape">
            {/* <div class="box "></div> */}
        </div>
 
        
        
      
    </div>
  )
}

export default Banner
