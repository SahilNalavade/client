import React from 'react'

function DefaultLayout() {
  return (
    <div className='layout'>

        <div className='header'>
            <h1>CV</h1>
        </div>

        <div className='content'>
            {props.children}
        </div>
    </div>
  )
}

export default DefaultLayout