import React from 'react'
import CV from '../../assets/cv.pdf'

const downloadInfo= () => {
  return (
    <div className='cta'>
        <a  href={CV} download className='btn'>Descargar CV</a>
        <a  href='#contact' className='btn btn-primary'>Déjame un mensaje</a>
    </div>
  )
}

export default downloadInfo