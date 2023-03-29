import React from 'react'
import { SuperBalls } from '@uiball/loaders'

const Loader = () => {
  return (
    <div className='container-loader'>
        <SuperBalls size={45} speed={1.4} color="red" />
    </div>
  )
}

export default Loader
