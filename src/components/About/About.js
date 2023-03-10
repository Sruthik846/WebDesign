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
          <div className='desc'>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </div>
          <div className='features'>Here is Few Features:</div>
          <div >
            <div className='li'></div>
            <div className='liData'>User Interface Design</div>
          </div>
          <div>
            <div className='li2'></div>
            <div className='liData2'>dhfudg fhjgfik</div>
          </div>
        </div>
    </div>
  )
}

export default About
