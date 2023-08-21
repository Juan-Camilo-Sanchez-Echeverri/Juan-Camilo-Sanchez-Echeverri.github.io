import React from 'react'
import CV from '../../assets/HV.Juan-Camilo-Sanchez-Echeverri.pdf'

const HV = () => {
  return (
    <article className='downloads'>
        <a  href={CV} download className='btn'>Descargar CV</a>
        <a  href='#contact' className='btn btn-primary'>Déjame un mensaje</a>
    </article>
  )
}

export default HV