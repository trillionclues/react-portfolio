import React from 'react'
import '../Dropdown.css'

const Dropdown = () => {
  return (
    <>
      <div className='dropdown'>
        <a href='#footer'>
          <div id='mouse-scroll'>
            <div className='mouse'>
              <div className='mouse-in'></div>
            </div>
            <div>
              <span className='down-arrow-1'></span>
              <span className='down-arrow-2'></span>
              <span className='down-arrow-3'></span>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default Dropdown
