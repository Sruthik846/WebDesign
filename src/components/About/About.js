import React from 'react'
import './About.css'

function About() {
  return (
    <div>
        <div className='aboutUsBox'>
            <div className='aboutUs'>ABout Us</div>
            <div className='why_choose_me'>Why Choose Me?</div>
            <div className='lineBox'>
              <div className='line'>
                <div className='lineRectangle'></div>
              </div>
            </div>

        </div>
        <div className='content'>
          <div className='imgDiv'>
              <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' ></img>
          </div>
          <div className='about'>Why Choose me ?</div>
        </div>
    </div>
  )
}

export default About
